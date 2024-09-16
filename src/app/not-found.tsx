import Link from "next/link";
import styles from "./page.module.css";

export default function Custom404() {
  return (
    <div className={`${styles.notFoundPage} ${styles.page}`}>
      <h1 className={styles.heading}>404 - Page not found</h1>
      <Link href="/" className={styles.startButton}>
        Home
      </Link>
    </div>
  );
}
