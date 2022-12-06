import { part1, part2, getInput } from './day6';

// part 1
const testInput1 = 'bvwbjplbgvbhsrlpgdmjqwftvncz';
const testInput2 = 'nppdvjthqldpwncqszvftbrmjlhg';
const testInput3 = 'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg';
const testInput4 = 'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw';

// part 2
const testInput5 = 'mjqjpqmgbljsphdztnvjfqwrcgsmlb';
const testInput6 = 'bvwbjplbgvbhsrlpgdmjqwftvncz';
const testInput7 = 'nppdvjthqldpwncqszvftbrmjlhg';
const testInput8 = 'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg';
const testInput9 = 'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw';


describe('Day 6', () => {
  it('should solve test input for part 1', () => {
    expect(part1(testInput1)).toEqual(5);
    expect(part1(testInput2)).toEqual(6);
    expect(part1(testInput3)).toEqual(10);
    expect(part1(testInput4)).toEqual(11);
  });

  it('should solve part 1', () => {
    const result = part1(getInput());
    console.warn('Part 1: ',result);

    expect(result).not.toBeNaN();
  });

  it('should solve test input for part 2', () => {
    expect(part2(testInput5)).toEqual(19);
    expect(part2(testInput6)).toEqual(23);
    expect(part2(testInput7)).toEqual(23);
    expect(part2(testInput8)).toEqual(29);
    expect(part2(testInput9)).toEqual(26);
  });

  it('should solve part 2', () => {
    const result = part2(getInput());
    console.warn('Part 2: ',result);

    expect(result).not.toBeNaN();
  });
});
