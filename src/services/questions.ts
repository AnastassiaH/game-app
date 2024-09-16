import { DifficultyOptions } from "@/types/DifficultyOptions";
import { Question } from "@/types/Question";

type QuestionsResponse = {
  response_code: number;
  results: Question[];
};

const api_url = 'https://the-trivia-api.com/v2/questions';

function getQuestions<T>(
  difficulty: DifficultyOptions,
  amount: number
): Promise<T> {
  return fetch(
    `https://the-trivia-api.com/v2/questions?categories=general_knowledge&difficulties=${difficulty}&limit=${amount}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(`${response.status} ${response.text}`);
    }
    return response.json();
  });
}

export const getEasyQuestions = async (
  amount: number
): Promise<Question[]> =>
  await getQuestions(DifficultyOptions.easy, amount);
export const getMediumQuestions = async (
  amount: number
): Promise<Question[]> =>
  await getQuestions(DifficultyOptions.medium, amount);
export const getHardQuestions = async (
  amount: number
): Promise<Question[]> =>
  await getQuestions(DifficultyOptions.hard, amount);
