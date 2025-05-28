'use client';

import React from 'react';
import Image from 'next/image';
import styles from '@/styles/AboutSection.module.css';

const AboutSection: React.FC = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>About Us</h2>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <p>
              3D Fire Design provides expert fire protection design and documentation services for water-based fire suppression systems in both 2D and 3D environments.
            </p>
            <p>
              With over 15 years of industry experience, our team specializes in delivering high-quality fire system designs that meet all regulatory requirements while optimizing for efficiency and cost-effectiveness.
            </p>
            <p>
              We work closely with architects, engineers, and contractors to ensure seamless integration of fire protection systems into building designs, from concept to completion.
            </p>
            <h3>Our Expertise</h3>
            <ul>
              <li>BIM (Building Information Modeling) for fire systems</li>
              <li>Hydraulic calculations and system sizing</li>
              <li>Compliance with Australian Standards and regulations</li>
              <li>3D coordination with other building services</li>
              <li>Shop drawings and fabrication documentation</li>
            </ul>
          </div>
          <div className={styles.aboutImage}>
            <Image 
              src={process.env.NODE_ENV === 'production' ? '/3dfire-next/images/slide-2.jpg' : '/images/slide-2.jpg'}
              alt="3D Fire Design Team"
              width={500}
              height={400}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
