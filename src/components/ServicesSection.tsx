'use client';

import React from 'react';
import styles from '@/styles/ServicesSection.module.css';

interface ServiceItem {
  title: string;
  description: string;
}

const ServicesSection: React.FC = () => {
  const services: ServiceItem[] = [
    {
      title: 'Fire Design',
      description: 'We offer detailed technical design and documentation for water-based fire suppression systems in both the 2D and 3D environment.'
    },
    {
      title: 'Fire BIM',
      description: '3DFire has high levels of experience with Revit, MicroBIM Fire and Navisworks softwares.'
    },
    {
      title: 'Drafting Services',
      description: '3DFire provide various Fire Drafting Services.'
    }
  ];

  return (
    <section className={styles.servicesSection} id="services">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>SERVICES</h2>
        <h3 className={styles.sectionSubtitle}>Everything you need for fire systems design</h3>
        
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
