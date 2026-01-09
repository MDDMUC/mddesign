import styles from './Proof.module.css'

const awardBadges = [
  'Award 1', 'Award 2', 'Award 3', 'Award 4', 'Award 5', 'Award 6',
  'Award 7', 'Award 8', 'Award 9', 'Award 10', 'Award 11', 'Award 12'
]

const clientLogos = [
  { name: 'BMW', alt: 'BMW logo' },
  { name: 'Red Bull', alt: 'Red Bull logo' },
  { name: 'CEPRES', alt: 'CEPRES logo' },
  { name: 'Olympic Museum', alt: 'Olympic Museum logo' },
  { name: 'Keller Sports', alt: 'Keller Sports logo' },
  { name: 'Peak Performance', alt: 'Peak Performance logo' }
]

export default function Proof() {
  return (
    <section className={styles.proof}>
      <h2 className={styles.headline}>25+ International Design Awards</h2>

      <div className={styles.awardGrid}>
        {awardBadges.map((award, index) => (
          <div key={index} className={styles.awardBadge}>
            <div className={styles.badgePlaceholder}>
              {award}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.clientLogos}>
        {clientLogos.map((client, index) => (
          <div key={index} className={styles.logoItem}>
            <div className={styles.logoPlaceholder}>
              {client.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
