import styles from "./answerCard.module.css";

type Props = {
  answer: string;
  index: number;
  handleAnswer: (answer: string, index: number) => void;
};

export default function AnswerCard({
  answer,
  index,
  handleAnswer,
}: Props) {
  const answerClick = (event: React.MouseEvent<HTMLDivElement>) => {
    handleAnswer(answer, index);
  };

  return (
    <div className={styles.answerCard} onClick={answerClick}>
      <span className={styles.leftLine}></span>
      <div className={styles.answerText}>
        <p className={styles.answerLetter}>A</p>
        <p className={styles.answerValue}>{answer}</p>
      </div>
      <span className={styles.rightLine}></span>
    </div>
  );
}
