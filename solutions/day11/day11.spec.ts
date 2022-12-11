import { part1, part2 } from './day11';
import { monkeys, testMonkeys } from './day11.data';


describe('Day 11', () => {
  it('should solve test input for part 1', () => {
    expect(part1(testMonkeys)).toEqual(10605);
  });

  it('should solve part 1', () => {
    const result = part1(monkeys);
    console.warn('Part 1: ',result);

    expect(result).not.toBeNaN();
  });

  it('should solve test input for part 2', () => {
    expect(part2(testMonkeys)).toEqual(2713310158);
  });

  it('should solve part 2', () => {
    const result = part2(monkeys);
    console.warn('Part 2: ',result);

    expect(result).not.toBeNaN();
  });
});
