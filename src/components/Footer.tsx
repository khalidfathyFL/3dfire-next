'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>3D Fire Design</h3>
            <ul className={styles.footerLinks}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/microbim-fire">MicroBIM Fire</Link></li>
              <li><Link href="/tutorials">Tutorials</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h3>Services</h3>
            <ul className={styles.footerLinks}>
              <li><Link href="/services#fire-design">Fire Design</Link></li>
              <li><Link href="/services#fire-bim">Fire BIM</Link></li>
              <li><Link href="/services#drafting-services">Drafting Services</Link></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h3>CONTACT</h3>
            <div className={styles.contactInfo}>
              <h4>Get In Touch</h4>
              <div className={styles.companyInfo}>
                <p>3D Fire Pty Ltd</p>
                <p>Tel: +61 2 9871 3959</p>
                <p>Design Office Manager</p>
                <p>Direct: +61(0) 414 228 443</p>
                <p>E: <a href="mailto:design@3dfire.com.au">design@3dfire.com.au</a></p>
                <p>W: <a href="http://www.3dfire.com.au" target="_blank" rel="noopener noreferrer">www.3dfire.com.au</a></p>
              </div>
              
              <div className={styles.supportInfo}>
                <h4>PipeFab Support</h4>
                <p>E: <a href="mailto:support@3dfire.com.au">support@3dfire.com.au</a></p>
              </div>
            </div>
          </div>
          
          <div className={styles.footerSection}>
            <div className={styles.contactForm}>
              <h3>Send a Message</h3>
              <form className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="fullName">Full Name *</label>
                  <input type="text" id="fullName" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">E-mail Address *</label>
                  <input type="email" id="email" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Your Message *</label>
                  <textarea id="message" rows={5} required></textarea>
                </div>
                <button type="submit" className={styles.submitButton}>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy;{new Date().getFullYear()} 3D Fire Design | All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
