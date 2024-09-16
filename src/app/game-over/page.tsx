"use client";

import { useContext } from "react";
import { FinalScoreContext } from "@/context/FinalScoreContext";
import Image from "next/image";
import styles from "./page.module.css";
import HandImage from "../../../public/images/hand-1.svg";

export default function GameOver() {
  const { finalScore } = useContext(FinalScoreContext);

  const handleRestart = () => {
    window.location.href = '/';
  }

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
        <p className={styles.heading}>$ {finalScore} earned</p>
        <button onClick={handleRestart} className={styles.startButton}>
          Try again
        </button>
      </div>
    </div>
  );
}
