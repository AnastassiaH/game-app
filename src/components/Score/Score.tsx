"use client";

import { useParams } from "next/navigation";
import styles from "./Score.module.css";
import classNames from "classnames";
import { useCallback } from "react";

type Props = {
  money: number[];
};

export default function Score({ money }: Props) {
  const params = useParams();
  const questionNum = params.id;

  const formatSumNumber = useCallback((value: number): string => {
    return value
      .toString()
      .split("")
      .toReversed()
      .join("")
      .split("000")
      .join("000,")
      .split("")
      .toReversed()
      .join("");
  }, []);

  return (
    <aside className={styles.score}>
      {money.toReversed().map((sum, index, array) => (
        <div
          key={sum}
          className={classNames(styles.scoreItem, {
            [styles.scoreItemActive]: array.length - index === +questionNum,
            [styles.scoreItemPassed]:
              array.length - index < +(questionNum || 0),
          })}
        >
          <span className={styles.leftLine}></span>
          <p className={styles.sumAmount}>${formatSumNumber(sum)}</p>
          <span className={styles.rightLine}></span>
        </div>
      ))}
    </aside>
  );
}
