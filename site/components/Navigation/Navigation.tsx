'use client';
import Link from 'next/link';
import { useState } from 'react';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Portfolio', href: '/work' },
    { label: 'Contact', href: '/contact' },
    { label: 'Theme', href: '/theme' },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        {/* Left: Logo (icon only) */}
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>△</span>
        </Link>

        {/* Center: Navigation Items */}
        <div className={styles.navItems}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.navLink}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={styles.mobileMenuBtn}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? '×' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
