"use client";

import {
  getEasyQuestions,
  getHardQuestions,
  getMediumQuestions,
} from "@/services/questions";
import { Question } from "@/types/Question";
import { createContext, useCallback, useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

type ContextType = {
  questions: Question[];
};

export const QuestionsContext = createContext<ContextType>({
  questions: [],
});

export default function QuestionsProvider({ children }: Props) {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const getQuestions = async () => {
      const easyQuestions = await getEasyQuestions(4);
      const mediumQuestions = await getMediumQuestions(4);
      const hardQuestions = await getHardQuestions(4);
    
      setQuestions([
        ...easyQuestions,
        ...mediumQuestions,
        ...hardQuestions,
      ]);
    };

    getQuestions();
  }, []);

  return (
    <QuestionsContext.Provider value={{ questions }}>
      {children}
    </QuestionsContext.Provider>
  );
}
