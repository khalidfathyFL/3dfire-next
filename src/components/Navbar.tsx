'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  // Navigation labels
  const navLabels = {
    'home': 'HOME',
    'about': 'ABOUT US',
    'services': 'SERVICES',
    'projects': 'PROJECTS',
    'tools': 'TOOLS',
    'contact': 'CONTACT'
  };
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Check for saved dark mode preference
    try {
      const savedDarkMode = localStorage.getItem('darkMode');
      if (savedDarkMode === 'true') {
        setIsDarkMode(true);
        document.documentElement.classList.add('dark-mode');
      }
    } catch (error) {
      console.error('Error accessing localStorage:', error);
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    
    // Prevent body scrolling when menu is open
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };
  
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    try {
      if (newDarkMode) {
        document.documentElement.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'true');
      } else {
        document.documentElement.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'false');
      }
    } catch (error) {
      console.error('Error setting dark mode:', error);
    }
    
    // Force a re-render by toggling a class on the body
    document.body.classList.toggle('theme-updated');
  };
  
  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Close mobile menu if open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
      document.body.style.overflow = 'auto';
    }
    
    // Handle home link
    if (href === '/') {
      router.push('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    // Handle anchor links
    const targetId = href.replace('/#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      
      // Update URL without page reload
      window.history.pushState(null, '', href);
    } else {
      // If element doesn't exist yet (e.g., during initial load), navigate normally
      router.push(href);
    }
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.navbarBrand}>
          <Link href="/" className={styles.brandLogo}>
            <Image 
              src="/images/logo.png" 
              alt="3DFire Design" 
              width={200} 
              height={50}
              priority
            />
          </Link>
        </div>
        
        <div className={styles.navContainer}>
          <div className={styles.navTop}>
            <div className={styles.searchContainer}>
              <input 
                type="text" 
                className={styles.searchBox} 
                placeholder="Site Search..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setShowSearchResults(true)}
                onBlur={() => setTimeout(() => setShowSearchResults(false), 200)}
              />
              {showSearchResults && searchTerm.length > 0 && (
                <div className={styles.searchResults}>
                  {Object.entries(navLabels).filter(([key, value]) => 
                    value.toLowerCase().includes(searchTerm.toLowerCase())
                  ).map(([key, value]) => (
                    <a 
                      key={key} 
                      href={`/#${key}`} 
                      className={styles.searchResult}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavLinkClick(e, `/#${key}`);
                        setSearchTerm('');
                        setShowSearchResults(false);
                      }}
                    >
                      {value}
                    </a>
                  ))}
                  {Object.entries(navLabels).filter(([key, value]) => 
                    value.toLowerCase().includes(searchTerm.toLowerCase())
                  ).length === 0 && (
                    <div className={styles.noResults}>No results found</div>
                  )}
                </div>
              )}
            </div>
            <button 
              onClick={toggleDarkMode} 
              className={styles.darkModeToggle}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </div>
          
          <button 
            className={styles.mobileMenuButton} 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className={styles.menuIcon}></span>
          </button>
          
          <div className={`${styles.navLinks} ${isMobileMenuOpen ? styles.open : ''}`}>
            <a href="/#home" className={styles.navLink} onClick={(e) => handleNavLinkClick(e, '/#home')}>{navLabels.home}</a>
            <a href="/#about" className={styles.navLink} onClick={(e) => handleNavLinkClick(e, '/#about')}>{navLabels.about}</a>
            <a href="/#services" className={styles.navLink} onClick={(e) => handleNavLinkClick(e, '/#services')}>{navLabels.services}</a>
            <a href="/#projects" className={styles.navLink} onClick={(e) => handleNavLinkClick(e, '/#projects')}>{navLabels.projects}</a>
            <a href="/#tools" className={styles.navLink} onClick={(e) => handleNavLinkClick(e, '/#tools')}>{navLabels.tools}</a>
            <a href="/#contact" className={styles.navLink} onClick={(e) => handleNavLinkClick(e, '/#contact')}>{navLabels.contact}</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
