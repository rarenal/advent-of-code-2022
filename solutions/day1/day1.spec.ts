import { part1, part2, getInput } from './day1';

const testInput = [
  [1000],
  [2000],
  [3000],
  [4000],
  [5000, 6000],
  [7000, 8000, 9000],
  [10000]
];

describe('Day 1', () => {
  it('should solve test input for part 1', () => {
    expect(part1(testInput)).toEqual(24000);
  });

  it('should solve part 1', () => {
    const result = part1(getInput());
    console.warn('Part 1: ',result);

    expect(result).not.toBeNaN();
  });

  it('should solve test input for part 2', () => {
    expect(part2(testInput)).toEqual(45000);
  });

  it('should solve part 2', () => {
    const result = part2(getInput());
    console.warn('Part 2: ',result);

    expect(result).not.toBeNaN();
  });
});
