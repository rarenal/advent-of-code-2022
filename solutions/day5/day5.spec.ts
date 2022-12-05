import { part1, part2, getInput } from './day5';

const testInput = [
`    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3`,
`move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`
];

describe('Day 5', () => {
  it('should solve test input for part 1', () => {
    expect(part1(testInput)).toEqual('CMZ');
  });

  it('should solve part 1', () => {
    const result = part1(getInput());
    console.warn('Part 1: ',result);

    expect(result).not.toBeNaN();
  });

  it('should solve test input for part 2', () => {
    expect(part2(testInput)).toEqual('MCD');
  });

  it('should solve part 2', () => {
    const result = part2(getInput());
    console.warn('Part 2: ',result);

    expect(result).not.toBeNaN();
  });
});
