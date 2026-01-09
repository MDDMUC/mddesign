import Link from 'next/link';
import styles from './CaseStudyNavigation.module.css';

interface NextProject {
  title: string;
  href: string;
  thumbnail?: string;
}

interface CaseStudyNavigationProps {
  nextProject: NextProject;
}

export default function CaseStudyNavigation({ nextProject }: CaseStudyNavigationProps) {
  return (
    <nav className={styles.container}>
      <div className={styles.innerContainer}>
        <Link href="/work" className={styles.backLink}>
          <span className={styles.arrow}>←</span>
          Back to Work
        </Link>

        <Link href={nextProject.href} className={styles.nextProject}>
          <div className={styles.textBlock}>
            <span className={styles.label}>NEXT PROJECT</span>
            <span className={styles.projectTitle}>{nextProject.title}</span>
          </div>
          {nextProject.thumbnail && (
            <div className={styles.thumbnail}>
              <img
                src={nextProject.thumbnail}
                alt={nextProject.title}
                className={styles.thumbnailImage}
              />
            </div>
          )}
          <span className={styles.nextArrow} aria-hidden="true">→</span>
        </Link>
      </div>
    </nav>
  );
}
