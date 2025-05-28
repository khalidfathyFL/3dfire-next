'use client';

import React from 'react';
import Link from 'next/link';
import styles from '@/styles/ToolsSection.module.css';

const ToolsSection: React.FC = () => {
  return (
    <section className={styles.toolsSection} id="tools">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>TOOLS</h2>
        <h3 className={styles.sectionSubtitle}>Improve drafting/design efficiency in Revit</h3>
        
        <div className={styles.toolsContent}>
          <p>
            Use your construction revit models and produce Cutting Sheets directly from the model by using{' '}
            <Link href="https://www.microbim.net/Authorized/home.html" className={styles.highlight} target="_blank">
              MicroBIM Fire
            </Link>.
          </p>
          <p>Very easy to use and built to increase your efficiency and productivity!</p>
          <p>Generate Pipe Fabrication reports (Cutting Sheets) faster than ever before!</p>
          
          <div className={styles.tutorialLink}>
            <Link href="https://www.microbim.net/PipeFabTutorial.html" className={styles.tutorialButton} target="_blank">
              MicroBIM Tutorials
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
