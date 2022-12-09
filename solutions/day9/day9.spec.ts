import { part1, part2, getInput } from './day9';

const testInput = [
  'R 4',
  'U 4',
  'L 3',
  'D 1',
  'R 4',
  'D 1',
  'L 5',
  'R 2',
];

const testInput2 = [
  'R 5',
  'U 8',
  'L 8',
  'D 3',
  'R 17',
  'D 10',
  'L 25',
  'U 20',
]

describe('Day 9', () => {
  it('should solve test input for part 1', () => {
    expect(part1(testInput)).toEqual(13);
  });

  it('should solve part 1', () => {
    const result = part1(getInput());
    console.warn('Part 1: ',result);

    expect(result).not.toBeNaN();
  });

  it('should solve test input for part 2', () => {
    expect(part2(testInput)).toEqual(1);
    expect(part2(testInput2)).toEqual(36);
  });

  it('should solve part 2', () => {
    const result = part2(getInput());
    console.warn('Part 2: ',result);

    expect(result).not.toBeNaN();
  });
});
