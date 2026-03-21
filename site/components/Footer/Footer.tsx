import Link from 'next/link'
import styles from './Footer.module.css'

const footerLinks = {
  work: [
    { label: 'CEPRES', href: '/work/cepres' },
    { label: 'Keller Sports', href: '/work/keller-sports' },
    { label: 'YCA', href: '/work/yca' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ],
  social: [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/martindrexler' },
    { label: 'Dribbble', href: 'https://dribbble.com/martindrexler' },
    { label: 'Twitter', href: 'https://twitter.com/martindrexler' },
  ],
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand Column */}
          <div className={styles.brandColumn}>
            <Link href="/" className={styles.logo}>
              Martin Drexler
            </Link>
            <p className={styles.tagline}>
              Strategic design partner for ambitious companies
            </p>
          </div>

          {/* Work Column */}
          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>Work</h4>
            <ul className={styles.linkList}>
              {footerLinks.work.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>Company</h4>
            <ul className={styles.linkList}>
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Column */}
          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>Connect</h4>
            <ul className={styles.linkList}>
              {footerLinks.social.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            &copy; {currentYear} Martin Drexler. All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            <Link href="/privacy" className={styles.legalLink}>
              Privacy
            </Link>
            <Link href="/imprint" className={styles.legalLink}>
              Imprint
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
