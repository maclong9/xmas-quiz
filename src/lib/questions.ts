export const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const questions = [
  {
    question: "Earth is within the Milky Way galaxy",
    difficulty: "Easy",
    correctAnswer: true,
    incorrectAnswers: [false],
    category: "Science"
  },
  {
    question: "What is the largest planet in our solar system",
    difficulty: "Medium",
    correctAnswer: "Jupiter",
    incorrectAnswers: ["Saturn", "Neptune", "Earth"],
    category: "Science"
  },
  {
    question: "What year did World War I begin",
    difficulty: "Hard",
    correctAnswer: "1914",
    incorrectAnswers: ["1915", "1916", "1917"],
    category: "History"
  },
];