"use client";

import { createContext, useCallback, useState } from "react";

type Props = {
  children: React.ReactNode;
};

type ContextType = {
  finalScore: number;
  updateFinalScore: (value: number) => void;
};

export const FinalScoreContext = createContext<ContextType>({
  finalScore: 0,
  updateFinalScore: () => {},
});

export default function FinalScoreProvider({ children }: Props) {
  const [finalScore, setFinalScore] = useState(0);
  const updateFinalScore = useCallback((value: number) => {
    setFinalScore(value);
  }, []);
  return (
    <FinalScoreContext.Provider value={{ finalScore, updateFinalScore }}>
      {children}
    </FinalScoreContext.Provider>
  );
}
