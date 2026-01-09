import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { label: 'Work', href: '/work' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ]

  const legalLinks = [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Imprint', href: '/imprint' },
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Column */}
          <div className={styles.leftColumn}>
            <div className={styles.logo}>MARTIN DREXLER</div>
            <p className={styles.tagline}>
              Strategic design partner for ambitious companies
            </p>
          </div>

          {/* Right Column */}
          <div className={styles.rightColumn}>
            <nav className={styles.nav} aria-label="Footer navigation">
              <ul className={styles.navList}>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={styles.navLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className={styles.contact}>
              <a href="mailto:hello@martindrexler.com" className={styles.email}>
                hello@martindrexler.com
              </a>
              <div className={styles.location}>Munich, Germany</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottom}>
          <div className={styles.copyright}>
            © {currentYear} Martin Drexler Design LLC
          </div>

          <div className={styles.social}>
            <a
              href="https://linkedin.com/in/martindrexler"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn profile"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 2.5h-13A1 1 0 002.5 3.5v13a1 1 0 001 1h13a1 1 0 001-1v-13a1 1 0 00-1-1zM7 14.5H5V8h2v6.5zM6 7a1 1 0 110-2 1 1 0 010 2zm9 7.5h-2v-3.5c0-1-.5-1.5-1.5-1.5S10 10 10 11v3.5H8V8h2v1c.5-.75 1.5-1.25 2.5-1.25S15 9 15 11v3.5z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          <nav className={styles.legal} aria-label="Legal navigation">
            <ul className={styles.legalList}>
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.legalLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
