import Button from '@/components/Button/Button'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.headline}>Strategic design partner for ambitious companies</h1>
      <p className={styles.subhead}>
        I help funded startups and enterprises transform their products, brands, and teams—with
        the strategic thinking of a consultancy and the craft quality of an award-winning designer.
      </p>
      <div className={styles.ctas}>
        <Button variant="primary" href="#work">
          View Selected Work
        </Button>
        <Button variant="secondary" href="#contact">
          Start a Conversation
        </Button>
      </div>
    </section>
  )
}
