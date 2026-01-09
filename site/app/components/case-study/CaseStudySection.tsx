import React from 'react';
import styles from './CaseStudySection.module.css';

interface CaseStudySectionProps {
  label?: string;
  heading: string;
  children: React.ReactNode;
  background?: 'primary' | 'alt';
}

export default function CaseStudySection({
  label,
  heading,
  children,
  background = 'primary',
}: CaseStudySectionProps) {
  return (
    <section className={`${styles.section} ${background === 'alt' ? styles.alt : ''}`}>
      <div className={styles.innerContainer}>
        <div className={styles.header}>
          {label && <p className={styles.label}>{label}</p>}
          <h2 className={styles.heading}>{heading}</h2>
        </div>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </section>
  );
}

// Subcomponents for common patterns
export function SectionParagraph({ children }: { children: React.ReactNode }) {
  return <p className={styles.paragraph}>{children}</p>;
}

export function SectionInsightList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className={styles.insightList}>
      <p className={styles.insightTitle}>{title}</p>
      <ul className={styles.insightItems}>
        {items.map((item, index) => (
          <li key={index} className={styles.insightItem}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SectionPullQuote({ children }: { children: React.ReactNode }) {
  return <blockquote className={styles.pullQuote}>{children}</blockquote>;
}
