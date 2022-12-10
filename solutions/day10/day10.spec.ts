import { part1, part2, getInput } from './day10';
import { expected, testInput } from './day10.spec-data';

describe('Day 10', () => {
  it('should solve test input for part 1', () => {
    expect(part1(testInput)).toEqual(13140);
  });

  it('should solve part 1', () => {
    const result = part1(getInput());
    console.warn('Part 1: ',result);

    expect(result).not.toBeNaN();
  });

  it('should solve test input for part 2', () => {
    expect(part2(testInput)).toEqual(expected);
  });

  it('should solve part 2', () => {
    const result = part2(getInput());
    console.warn('Part 2: ',result);

    expect(result).not.toBeNaN();
  });
});
