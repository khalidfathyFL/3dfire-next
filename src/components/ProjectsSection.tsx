'use client';

import React from 'react';
import Image from 'next/image';
import styles from '@/styles/ProjectsSection.module.css';

interface ProjectItem {
  id: number;
  title: string;
  year: string;
  image: string;
  description: string;
}

const ProjectsSection: React.FC = () => {
  const projects: ProjectItem[] = [
    {
      id: 1,
      title: 'The Lennox Parramatta',
      year: '2017-2018',
      image: '/images/01-The-Lennox-Parramatta-2017-2018.jpg',
      description: 'Complete fire protection system design for a residential tower in Parramatta.',
    },
    {
      id: 2,
      title: 'The Darling Exchange',
      year: '2017-2018',
      image: '/images/02-The-Darling-Exchange-2017-2018.jpg',
      description: 'Specialized fire suppression system for a unique architectural landmark.',
    },
    {
      id: 3,
      title: 'Grafton Correction Centre',
      year: '2017-2018',
      image: '/images/03-Grafton-Correction-Centre-2017-2018.jpg',
      description: 'Custom fire protection solution for a correctional facility.',
    },
    {
      id: 4,
      title: 'Darling Harbour Live NE Plot',
      year: '2017-2018',
      image: '/images/04-Darling-Harbour-Live-NE-Plot-2017-2018.jpg',
      description: 'Fire system design for a major entertainment development.',
    },
    {
      id: 5,
      title: 'Opal Towers',
      year: '2016-2017',
      image: '/images/05-Opal-Towers-2016-2017.jpg',
      description: 'Complete fire protection system design for a residential tower.',
    },
    {
      id: 6,
      title: 'Canberra University Public Hospital',
      year: '2016-2017',
      image: '/images/06-Canberra-University-Public-Hospital-2016-2017.jpg',
      description: 'Specialized fire suppression system for a major hospital complex.',
    },
    {
      id: 7,
      title: 'South Village Kirrawee',
      year: '2016',
      image: '/images/07-South-Village-Kirrawee-2016.jpg',
      description: 'Fire protection system for a residential and retail development.',
    },
    {
      id: 8,
      title: 'Darling Harbour Live North West Plot',
      year: '2016',
      image: '/images/08-Darling-Harbour-Live-North-West-Plot-2016.jpg',
      description: 'Comprehensive fire system for an entertainment precinct.',
    },
    {
      id: 9,
      title: 'Wynyard Station Upgrade',
      year: '2015-2016',
      image: '/images/10-Wynyard-Station-Upgrade-2015-2016.jpg',
      description: 'Fire protection solutions for a major transportation hub upgrade.',
    },
    {
      id: 10,
      title: 'Barangaroo R1-R7',
      year: '2015-2016',
      image: '/images/11-Barangaroo-R1--R7-2015-2016.jpg',
      description: 'Fire system design for a prestigious waterfront development.',
    },
    {
      id: 11,
      title: 'B1 Square Burwood',
      year: '2015',
      image: '/images/12-B1-Square-Burwood-2015.jpg',
      description: 'Fire protection system for a mixed-use development.',
    },
    {
      id: 12,
      title: 'UTS Thomas Street',
      year: '2014',
      image: '/images/13-UTS-Thomas-Street-2014.jpg',
      description: 'Fire system design for an educational institution.',
    },
    {
      id: 13,
      title: 'Campbelltown Hospital',
      year: '2014',
      image: '/images/14-Campbelltown-Hospital-2014.jpg',
      description: 'Fire system design for a hospital.',
    },
    {
      id: 14,
      title: 'Interim Exhibition Centre',
      year: '2013',
      image: '/images/15-Interim-Exhibition-Centre-2013.jpg',
      description: 'Fire system design for an exhibition centre.',
    },
    {
      id: 15,
      title: 'The Darling Exchange',
      year: '2017-2018',
      image: '/images/02-The-Darling-Exchange-2017-2018-V2.jpg',
      description: 'Specialized fire suppression system for a unique architectural landmark.',
    },
  ];

  return (
    <section className={styles.projectsSection} id="projects">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Projects</h2>
        <p className={styles.sectionDescription}>
          Browse through some of our recent fire protection system designs and implementations.
        </p>
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImageContainer}>
                <Image 
                  src={process.env.NODE_ENV === 'production' ? `/3dfire-next${project.image}` : project.image} 
                  alt={project.title}
                  width={600}
                  height={400}
                  className={styles.projectImage}
                />
              </div>
              <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.year}>{project.year}</p>
                <p className={styles.projectDescription}>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
