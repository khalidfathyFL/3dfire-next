'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/HomeSection.module.css';

const HomeSection: React.FC = () => {
  return (
    <section className={styles.homeSection}>
      <div className={styles.backgroundImage}>
        <Image 
        src="/images/slide-2.jpg"
        alt="3D Fire Design Background" 
          fill 
          priority 
          quality={100}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className={styles.homeOverlay}>
        <div className={styles.homeContent}>
          <h1>Fire Systems Design</h1>
          <div className={styles.homeDescription}>
            <p>Let us improve the efficiency of your business by providing a range of fire design and drafting services and innovative solutions.</p>
            <p>Try our MicroBIM Fire add-in tool that provides all you need for pipe modelling, shop drawings documentation and pipe fabrication.</p>
          </div>
          <div className={styles.ctaButtons}>
            <a href="https://www.microbim.net/" className={styles.secondaryBtn} target="_blank" rel="noopener noreferrer">Request a Trial</a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
