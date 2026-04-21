import { useEffect, useRef, useState } from 'react';

export const useLazyVideo = (src) => {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !isLoaded) {
            const video = entry.target;
            video.src = src;
            video.load();
            setIsLoaded(true);
            observer.unobserve(video);
          }
        });
      },
      { rootMargin: '50px' }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, [src, isLoaded]);

  return { videoRef, isLoaded };
};
