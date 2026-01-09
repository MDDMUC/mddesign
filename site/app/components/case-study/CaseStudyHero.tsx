import Link from 'next/link';
import styles from './CaseStudyHero.module.css';

interface CaseStudyHeroProps {
  breadcrumb: string;
  title: string;
  description: string;
  metrics: string;
  heroImage?: string;
  heroImageAlt?: string;
  heroImageCaption?: string;
  clientLogo?: string;
  clientLogoAlt?: string;
}

export default function CaseStudyHero({
  breadcrumb,
  title,
  description,
  metrics,
  heroImage,
  heroImageAlt = '',
  heroImageCaption,
  clientLogo,
  clientLogoAlt = '',
}: CaseStudyHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.innerContainer}>
        <div className={styles.header}>
          <div className={styles.leftColumn}>
            <nav aria-label="Breadcrumb">
              <p className={styles.breadcrumb}>
                <Link href="/work">Work</Link> / {breadcrumb}
              </p>
            </nav>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>
          </div>

          <div className={styles.rightColumn}>
            {clientLogo && (
              <img
                src={clientLogo}
                alt={clientLogoAlt}
                className={styles.clientLogo}
              />
            )}
            <div className={styles.metrics}>
              {metrics.split(' • ').map((metric, index, array) => (
                <span key={index} className={styles.metricItem}>
                  {metric}
                  {index < array.length - 1 && (
                    <span className={styles.separator} aria-hidden="true"> • </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>

        {heroImage && (
          <div className={styles.heroImageContainer}>
            <div className={styles.imageWrapper}>
              <img
                src={heroImage}
                alt={heroImageAlt}
                className={styles.heroImage}
              />
            </div>
            {heroImageCaption && (
              <p className={styles.imageCaption}>{heroImageCaption}</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
