import { part1, part2, getInput } from './day2';

const testInput = ['A Y', 'B X', 'C Z'];

describe('Day 2', () => {
  it('should solve test input for part 1', () => {
    expect(part1(testInput)).toEqual(15);
  });

  it('should solve part 1', () => {
    const result = part1(getInput());
    console.warn('Part 1: ',result);

    expect(result).not.toBeNaN();
  });

  it('should solve test input for part 2', () => {
    expect(part2(testInput)).toEqual(12);
  });

  it('should solve part 2', () => {
    const result = part2(getInput());
    console.warn('Part 2: ',result);

    expect(result).not.toBeNaN();
  });
});
