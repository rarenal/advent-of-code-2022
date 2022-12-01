import { sumArrayValues } from '../array-utils';
import { readRawInput } from '../file-utils';

// Common
export const getInput = () => readRawInput('day1.txt')
  .split("\n\n")
  .map((elfCalories) => elfCalories.split('\n').map(Number));

const sortedCaloriesByElf = (inputArray: number[][]) =>
  inputArray
    .map((elfFood) => sumArrayValues(elfFood))
    .sort((a, b) => a - b);

// Solutions
export const part1 = (caloriesPerElf: number[][]): number => {
  return sortedCaloriesByElf(caloriesPerElf).at(-1);
}

export const part2 = (caloriesPerElf: number[][]): number => {
  const caloriesByElf = sortedCaloriesByElf(caloriesPerElf);

  return caloriesByElf.at(-1)
    + caloriesByElf.at(-2)
    + caloriesByElf.at(-3);
}