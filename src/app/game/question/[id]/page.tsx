"use client";

import { useContext } from "react";
import styles from "./page.module.css";
import { usePathname, useRouter } from "next/navigation";
import { QuestionsContext } from "@/context/QuestionsContext";
import Score from "@/components/Score/Score";
import AnswerCard from "@/components/AnswerCard/AnswerCard";
import { FinalScoreContext } from "@/context/FinalScoreContext";

export default function Question() {
  const pathname = usePathname();
  const questionNum = +pathname.split("/").reverse()[0];
  const { questions } = useContext(QuestionsContext);
  const { updateFinalScore } = useContext(FinalScoreContext);
  const money = [
    500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000, 250000, 500000,
    1000000,
  ];
  const router = useRouter();

  if (!questions.length) {
    return;
  }

  const currQuestion = questions[questionNum - 1];
  const { question, correctAnswer, incorrectAnswers } = currQuestion;

  const randomIndex = Math.floor(Math.random() * 4);
  const answerOptions = [...incorrectAnswers];
  answerOptions.splice(randomIndex, 0, correctAnswer);

  const handleAnswer = (answer: string, index: number) => {
    if (answer === correctAnswer) {
      router.push(`./${questionNum + 1}`);
    } else {
      updateFinalScore(money[questionNum - 2] || 0);
      router.push("../../game-over");
    }
  };

  return (
    <div className={styles.game}>
      <div className={styles.board}>
        <p className={styles.question}>{question.text}</p>
        <div className={styles.answersContainer}>
          {answerOptions.map((answer, index) => (
            <AnswerCard
              key={answer}
              answer={answer}
              index={index}
              handleAnswer={handleAnswer}
            />
          ))}
        </div>
      </div>
      <Score money={money} />
    </div>
  );
}
