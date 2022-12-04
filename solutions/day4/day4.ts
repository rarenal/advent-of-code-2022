import { readInput } from '../../file-utils';

// Common
export const getInput = () => readInput('day4.txt');

const getRanges = (pair: string): [[number, number], [number, number]] =>{
  const [firstElf, secondElf] = pair.split(',');
  const [minFirst, maxFirst] = firstElf.split('-').map(Number);
  const [minSecond, maxSecond] = secondElf.split('-').map(Number);

  return [[minFirst, maxFirst], [minSecond, maxSecond]];
}

const isContained = ([minFirst, maxFirst]: [number, number], [minSecond, maxSecond]: [number, number]): boolean =>
  minFirst >= minSecond && maxFirst <= maxSecond;

const overlaps = ([minFirst, maxFirst]: [number, number], [minSecond,]: [number, number]): boolean =>
  maxFirst >= minSecond && minFirst <= minSecond;

// Solutions
export const part1 = (pairs: string[]): number => {
  // solution part 1
	return pairs.filter((pair) => {
    const [firstRange, secondRange] = getRanges(pair);

    return isContained(firstRange, secondRange) || isContained(secondRange, firstRange);
  }).length;
}

export const part2 = (pairs: string[]): number => {
	// solution part 2
  return pairs.filter((pair) => {
    const [firstRange, secondRange]  = getRanges(pair);

    return overlaps(firstRange, secondRange) || overlaps(secondRange, firstRange);
  }).length;
}