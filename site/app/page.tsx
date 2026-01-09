import Button from '@/components/Button/Button'
import styles from './page.module.css'

export default function Home() {
  return (
    <main id="main-content" className={styles.main}>
      <div className={styles.hero}>
        <h1 className="text-display">Strategic design partner for ambitious companies</h1>
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
      </div>
    </main>
  )
}
