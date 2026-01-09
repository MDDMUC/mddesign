'use client';
import Link from 'next/link';
import { useState } from 'react';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Subterranean', href: '/subterranean' },
    { label: 'Sea', href: '/sea' },
    { label: 'Land', href: '/land' },
    { label: 'Air', href: '/air' },
    { label: 'Space', href: '/space' },
    { label: 'Lattice', href: '/lattice' },
    { label: 'Arsenal-1', href: '/arsenal-1' },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        {/* Left: Logo */}
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>△</span>
          <span className={styles.logoText}>ANDURIL</span>
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

        {/* Right: Search & Company */}
        <div className={styles.navActions}>
          <button className={styles.searchBtn}>Search</button>
          <button className={styles.companyBtn}>
            Company <span className={styles.plus}>+</span>
          </button>
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
