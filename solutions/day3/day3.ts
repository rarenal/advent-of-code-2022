import { group } from '../../array-utils';
import { readInput } from '../../file-utils';

// Common
export const getInput = () => readInput('day3.txt');

const getCompartments = (rucksack: string): [string, string]  => {
  const middle = Math.ceil(rucksack.length / 2);
  const firstCompartment = rucksack.slice(0, middle);
  const secondCompartment = rucksack.slice(middle);

  return [firstCompartment, secondCompartment];
}

const findFirstCommonChar = (first: string, ...rest: string[]): string =>
  first.split('')
    .find((char) =>
      rest.every((str) => str.includes(char)));

const calcItemPriority = (char: string): number => {
  if (char === char.toLowerCase()) {
    // 'a' is 97 in ASCII and 1 here
    return char.charCodeAt(0) - 96;
  } else {
    // 'A' is 65 in ASCII and 27 here
    return char.charCodeAt(0) - 64 + 26;
  }
}

// Solutions
export const part1 = (rucksacks: string[]): number => {
	// solution part 1
  return rucksacks.reduce((totalPriority, rucksack) => {
    const [first, second] = getCompartments(rucksack);
    const commonItem = findFirstCommonChar(first, second);
    const itemPriority = calcItemPriority(commonItem);

    return totalPriority + itemPriority;
  }, 0);
}

export const part2 = (rucksacks: string[]): any => {
	// solution part 2
  const ruckSackGroups = group(rucksacks, 3);

  return ruckSackGroups.reduce((totalPriority, rucksackGroup) => {
    const [first, second, third] = rucksackGroup;
    const commonItem = findFirstCommonChar(first, second, third);
    const itemPriority = calcItemPriority(commonItem);

    return totalPriority + itemPriority;
  }, 0);
}