import Image from "next/image";
import styles from "./page.module.css";
import HandImage from "../../public/images/hand-1.svg";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.imageContainer}>
        <Image
          src={HandImage}
          alt="thumb-up-image"
          className={styles.thumbImage}
        />
      </div>
      <div className={styles.pageContent}>
        <h1 className={styles.heading}>Who wants to be a millionaire?</h1>
        <Link href='/game' className={styles.startButton}>Start</Link>
      </div>
    </div>
  );
}
