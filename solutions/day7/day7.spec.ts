import { part1, part2, getInput } from './day7';

const testInput = [
'$ cd /',
'$ ls',
'dir a',
'14848514 b.txt',
'8504156 c.dat',
'dir d',
'$ cd a',
'$ ls',
'dir e',
'29116 f',
'2557 g',
'62596 h.lst',
'$ cd e',
'$ ls',
'584 i',
'$ cd ..',
'$ cd ..',
'$ cd d',
'$ ls',
'4060174 j',
'8033020 d.log',
'5626152 d.ext',
'7214296 k'];

describe('Day 7', () => {
  it('should solve test input for part 1', () => {
    expect(part1(testInput)).toEqual(95437);
  });

  it('should solve part 1', () => {
    const result = part1(getInput());
    console.warn('Part 1: ',result);

    expect(result).not.toBeNaN();
  });

  it('should solve test input for part 2', () => {
    expect(part2(testInput)).toEqual(24933642);
  });

  it('should solve part 2', () => {
    const result = part2(getInput());
    console.warn('Part 2: ',result);

    expect(result).not.toBeNaN();
  });
});
