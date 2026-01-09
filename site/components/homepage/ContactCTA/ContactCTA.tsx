import Button from '@/components/Button/Button'
import styles from './ContactCTA.module.css'

export default function ContactCTA() {
  return (
    <section id="contact" className={styles.contactCTA}>
      <div className={styles.container}>
        <h2 className={styles.headline}>Let's talk about your challenge</h2>
        <p className={styles.subhead}>
          I partner with ambitious companies to transform their products, brands, and teams. Let's discuss how I can help.
        </p>
        <Button variant="primary" href="/contact">
          Start a Conversation
        </Button>
        <p className={styles.alternative}>
          or email <a href="mailto:hello@martindrexler.com" className={styles.emailLink}>hello@martindrexler.com</a>
        </p>
      </div>
    </section>
  )
}
