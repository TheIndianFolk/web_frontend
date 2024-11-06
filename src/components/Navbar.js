import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  if (typeof window !== 'undefined') {
    window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    };
  }

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <Link href="/" legacyBehavior>
          <a>Netflix</a>
        </Link>
      </div>
      <ul className={styles.navLinks}>
        <li><Link href="/" legacyBehavior><a>Home</a></Link></li>
        <li><Link href="/tvshows" legacyBehavior><a>TV Shows</a></Link></li>
        <li><Link href="/movies" legacyBehavior><a>Movies</a></Link></li>
        <li><Link href="/latest" legacyBehavior><a>Latest</a></Link></li>
        <li><Link href="/mylist" legacyBehavior><a>My List</a></Link></li>
      </ul>
      <div className={styles.search}>
        🔍
      </div>
    </nav>
  );
}