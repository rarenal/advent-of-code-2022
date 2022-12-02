import { readInput } from '../../file-utils';

// Common
export const getInput = () => readInput('day2.txt');

type Shape = 'X' | 'Y' | 'Z';
interface Round {
  lose: Shape;
  draw: Shape;
  win: Shape;
}

const shapeValues: Record<Shape, number> = {
  X: 1, // rock
  Y: 2, // paper
  Z: 3, // scissors
}

const roundResults: Record<string, Round> = {
  A: {lose: 'Z', win: 'Y', draw: 'X'}, // rock
  B: {lose: 'X', win: 'Z', draw: 'Y'}, // paper
  C: {lose: 'Y', win: 'X', draw: 'Z'}, // scissors
}

const part1RoundResult = (elfOption: string, myOption: string): number => {
  const roundOptions = roundResults[elfOption];

  switch (myOption) {
    case roundOptions.lose: return 0;
    case roundOptions.draw: return 3;
    case roundOptions.win: return 6;
  }
}

const part2RoundResult = (elfOption: string, expectedResult: string): number => {
  const roundOptions = roundResults[elfOption];

  switch (expectedResult) {
    case 'X': return shapeValues[roundOptions.lose];
    case 'Y': return shapeValues[roundOptions.draw] + 3;
    case 'Z': return shapeValues[roundOptions.win]  + 6;
  }
}

// Solutions
export const part1 = (rounds: string[]): number => {
	// solution part 1
  return rounds.reduce((total, round) => {
    const [elfOption, myOption] = round.split(' ');
    const shapeValue = shapeValues[myOption as Shape];
    const roundResult = part1RoundResult(elfOption, myOption);

    return total + shapeValue + roundResult;
  }, 0);
}

export const part2 = (rounds: string[]): number => {
	// solution part 2
  return rounds.reduce((total, round) => {
    const [elfOption, expectedResult] = round.split(' ');
    const roundResult = part2RoundResult(elfOption, expectedResult)

    return total + roundResult;
  }, 0);
}