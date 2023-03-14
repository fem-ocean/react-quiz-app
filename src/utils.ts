// This will keep a function that will help randomize the answers to the questions. so that the question doesnt stay at the same spot.

export const shuffleArray = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5);
