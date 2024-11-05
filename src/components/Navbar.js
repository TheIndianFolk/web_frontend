import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.leftSide}>
        <h1 className={styles.logo}>indianfolk</h1>
        <Link href="/" className={styles.navItem}>Home</Link>
        <Link href="/new" className={styles.navItem}>New and Popular</Link>
        <Link href="/search" className={styles.navItem}>Search by Language</Link>
      </div>
      <div className={styles.rightSide}>
        <button className={styles.searchButton} aria-label="Search">🔍</button>
        <button className={styles.notificationButton} aria-label="Notifications">🔔</button>
        <Link href="/login" className={styles.loginButton}>Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
