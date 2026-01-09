import Hero from '@/components/homepage/Hero/Hero'
import Proof from '@/components/homepage/Proof/Proof'
import Services from '@/components/homepage/Services/Services'
import FeaturedWork from '@/components/homepage/FeaturedWork/FeaturedWork'
import AboutTeaser from '@/components/homepage/AboutTeaser/AboutTeaser'
import ContactCTA from '@/components/homepage/ContactCTA/ContactCTA'
import styles from './page.module.css'

export default function Home() {
  return (
    <main id="main-content" className={styles.main}>
      <Hero />
      <Proof />
      <Services />
      <FeaturedWork />
      <AboutTeaser />
      <ContactCTA />
    </main>
  )
}
