'use client';

import React, { useState } from 'react';
import styles from '../styles/ContactSection.module.css';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setFormStatus({
      submitting: true,
      submitted: false,
      error: false,
      message: 'Preparing your message...'
    });
    
    try {
      // Create a mailto link with the form data
      const subject = `Contact Form: ${formData.name}`;
      const body = `Name: ${formData.name}\n\nEmail: ${formData.email}\n\nPhone: ${formData.phone || 'Not provided'}\n\nMessage:\n${formData.message}`;
      
      // Create the mailto URL
      const mailtoLink = `mailto:khalid.fathy@microbim.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open the user's default email client
      window.open(mailtoLink, '_blank');
      
      // Reset form after successful preparation
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
      setFormStatus({
        submitting: false,
        submitted: true,
        error: false,
        message: 'Thank you! Your email client has been opened with your message. Please send the email to complete your inquiry.'
      });
    } catch (error) {
      console.error('Error preparing email:', error);
      setFormStatus({
        submitting: false,
        submitted: false,
        error: true,
        message: 'There was an error preparing your message. Please email us directly at khalid.fathy@microbim.com.'
      });
    }
  };
  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Contact Us</h2>
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h3>Get in Touch</h3>
            <p>Have questions about our services or need a quote? Contact us today!</p>
            
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>📍</div>
              <div className={styles.infoText}>
                <h4>Address</h4>
                <p>Suite 3.02, 55 Miller Street, Pyrmont NSW 2009</p>
              </div>
            </div>
            
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>📞</div>
              <div className={styles.infoText}>
                <h4>Phone</h4>
                <p>+61 2 8004 5471</p>
              </div>
            </div>
            
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>✉️</div>
              <div className={styles.infoText}>
                <h4>Email</h4>
                <p>khalid.fathy@microbim.com</p>
              </div>
            </div>
          </div>
          
          <div className={styles.contactForm}>
            <h3>Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              {formStatus.message && (
                <div className={`${styles.statusMessage} ${formStatus.error ? styles.error : formStatus.submitted ? styles.success : ''}`}>
                  {formStatus.message}
                </div>
              )}
              
              <button 
                type="submit" 
                className={styles.submitButton}
                disabled={formStatus.submitting}
              >
                {formStatus.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
