import { transpose } from '../../array-utils';
import { readRawInput } from '../../file-utils';

// Common
export const getInput = () => readRawInput('day5.txt')
  .split('\n\n');

const buildStacks = (stacksStr: string): string[][] => {
  const rows = stacksStr.split('\n');

  return transpose(
      rows.map((row) =>
        row.split('')
          .filter((a, index) => index % 4 === 1))
      .slice(0, -1)
      .reverse()
  ).map((stack) => stack.filter((item) => item !== ' '));
};

const readCommand = (command: string): number[] =>
  command.match(/\d+/g).map(Number);

const moveStacks = (initialStacks: string[][], commands: string, preserveOrder = false) => {
  const stacks = [...initialStacks];

  commands.split('\n').filter((item) => !!item).forEach((instruction) => {
    const [amount, start, end] = readCommand(instruction);
    const toMove = preserveOrder ? stacks[start - 1].splice(-amount) :  stacks[start - 1].splice(-amount).reverse();

    stacks[end - 1].push(...toMove);
  });

  return stacks;
}

// Solutions
export const part1 = (input: string[]): string => {
	// solution part 1
  const [stacksStr, commands] = input;
  const stacks = buildStacks(stacksStr);
  const movedStacks = moveStacks(stacks, commands);

  return movedStacks.reduce((result, stack) =>
    result + stack[stack.length - 1], '');
}

export const part2 = (input: string[]): string => {
	// solution part 2
  const [stacksStr, commands] = input;
  const stacks = buildStacks(stacksStr);
  const movedStacks = moveStacks(stacks, commands, true);

  return movedStacks.reduce((result, stack) =>
    result + stack[stack.length - 1], '');
}