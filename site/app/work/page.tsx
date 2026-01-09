import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Selected Work | Martin Drexler',
  description: 'Portfolio of strategic design work spanning enterprise platforms, brand systems, and digital products.',
};

interface Project {
  title: string;
  href: string;
  description: string;
  metrics: string;
  thumbnail: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'CEPRES',
    href: '/work/cepres',
    description: 'The world\'s leading private market investment platform',
    metrics: '6 Awards • $45T in Assets • 6,000+ Users',
    thumbnail: 'https://placehold.co/800x600/EAEEF1/626262?text=CEPRES',
    featured: true,
  },
  {
    title: 'Young Champion Ambassador',
    href: '/work/yca',
    description: 'A global youth leadership program built from scratch',
    metrics: '25+ Cities • Acquired by IOA • 3 Years',
    thumbnail: 'https://placehold.co/800x600/EAEEF1/626262?text=YCA',
    featured: true,
  },
  {
    title: 'Keller Sports',
    href: '/work/keller-sports',
    description: 'Transformed a premium sports e-commerce platform',
    metrics: '13 Awards • 3 Relaunches • 2 Years',
    thumbnail: 'https://placehold.co/800x600/EAEEF1/626262?text=Keller+Sports',
    featured: true,
  },
  {
    title: 'Planetarie',
    href: '#',
    description: 'CBD startup positioned from founding through acquisition',
    metrics: 'Brand Strategy • Product Design • Acquired',
    thumbnail: 'https://placehold.co/800x600/EAEEF1/626262?text=Planetarie',
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={project.href} className={styles.projectCard}>
      <div className={styles.thumbnail}>
        <img src={project.thumbnail} alt={project.title} />
      </div>
      <div className={styles.projectContent}>
        <h2 className={styles.projectTitle}>{project.title}</h2>
        <p className={styles.projectDescription}>{project.description}</p>
        <p className={styles.projectMetrics}>{project.metrics}</p>
      </div>
    </Link>
  );
}

export default function WorkPage() {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Selected Work</h1>
          <p className={styles.subtitle}>
            Strategic design projects spanning enterprise platforms, brand systems, and digital products.
            Each project represents a long-term partnership focused on measurable business outcomes.
          </p>
        </div>
      </section>

      <section className={styles.featuredSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <p className={styles.sectionDescription}>
            In-depth case studies showcasing strategy, process, and results
          </p>
        </div>
        <div className={styles.featuredGrid}>
          {featuredProjects.map((project) => (
            <ProjectCard key={project.href} project={project} />
          ))}
        </div>
      </section>

      {otherProjects.length > 0 && (
        <section className={styles.otherSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Additional Work</h2>
            <p className={styles.sectionDescription}>
              Selected projects across various industries and engagement types
            </p>
          </div>
          <div className={styles.otherGrid}>
            {otherProjects.map((project) => (
              <ProjectCard key={project.href} project={project} />
            ))}
          </div>
        </section>
      )}

      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Let's talk about your project</h2>
          <p className={styles.ctaDescription}>
            Whether you're scaling after a funding round or transforming an established product,
            I'd love to hear what you're working on.
          </p>
          <Link href="/#contact" className={styles.ctaButton}>
            Start a Conversation
          </Link>
        </div>
      </section>
    </main>
  );
}
