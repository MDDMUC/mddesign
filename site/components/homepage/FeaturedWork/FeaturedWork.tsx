import Link from 'next/link'
import styles from './FeaturedWork.module.css'

const projects = [
  {
    id: 'cepres',
    title: 'CEPRES',
    description: 'Enterprise investment platform',
    metric: '6 AWARDS / $45T ASSETS',
    slug: '/work/cepres'
  },
  {
    id: 'yca',
    title: 'YCA Program',
    description: 'Olympic youth leadership program',
    metric: '25+ CITIES / ACQUIRED BY IOA',
    slug: '/work/yca'
  },
  {
    id: 'keller',
    title: 'Keller Sports',
    description: 'Premium sports e-commerce',
    metric: '13 AWARDS / HEAD OF DESIGN',
    slug: '/work/keller-sports'
  }
]

export default function FeaturedWork() {
  return (
    <section className={styles.featuredWork}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.label}>SELECTED WORK</p>
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.slug}
              className={styles.card}
            >
              <div className={styles.thumbnail}>
                <div className={styles.thumbnailPlaceholder}>
                  {project.title}
                </div>
                <div className={styles.clientLogo}>
                  {project.title}
                </div>
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <p className={styles.metric}>{project.metric}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
