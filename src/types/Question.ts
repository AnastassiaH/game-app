import { DifficultyOptions } from "./DifficultyOptions";

export type Question = {
  type: string;
  difficulty: DifficultyOptions;
  category: string;
  question: {
    text: string;
  };
  correctAnswer: string;
  incorrectAnswers: string[];
};
