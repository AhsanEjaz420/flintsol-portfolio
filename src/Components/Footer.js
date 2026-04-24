import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram, Github, Mail } from 'lucide-react';
import logo from '../assets/Untitled_design__22_-removebg-preview.png';

const Footer = () => {
  const location = useLocation();

  const navLinks = [
    { to: '/about', label: 'About' },
    { to: '/our-services', label: 'Services' },
    { to: '/Portfolio', label: 'Portfolio' },
    { to: '/industries', label: 'Industries' },
    { to: '/contact', label: 'Contact' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Mail, href: 'mailto:contact@flint-sol.com', label: 'Email' }
  ];

  return (
    <footer className="site-footer">
      {/* Gradient Top Border */}
      <div className="footer-gradient-border"></div>
      
      <div className="footer-container">
        {/* Top Section - Logo & Navigation */}
        <div className="footer-top">
          <motion.div 
            className="footer-logo-wrapper"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/">
              <img src={logo} alt="Flint Sol Logo" className="footer-logo" />
            </Link>
          </motion.div>
          
          <nav className="footer-nav">
            {navLinks.map((link) => (
              <Link 
                key={link.to}
                to={link.to}
                className={`footer-nav-link ${location.pathname === link.to ? 'active' : ''}`}
              >
                <span className="footer-link-text">{link.label}</span>
                <span className="footer-link-underline"></span>
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="footer-social">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="footer-social-link"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="footer-social-icon" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Section - Copyright & Punchline */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <span className="copyright-year">&copy; 2026</span>
            <strong className="company-name">Flint Sol</strong>
            <span className="copyright-rights">. All rights reserved.</span>
          </div>
          <div className="footer-punchline">
            <em>"Flint is a spark stone historically used to ignite fire, at Flint Sol we spark ideas into digital reality."</em>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
