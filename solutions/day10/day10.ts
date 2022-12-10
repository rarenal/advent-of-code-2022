import { nArray } from '../../array-utils';
import { readInput } from '../../file-utils';

// Common
export const getInput = () => readInput('day10.txt');

const strengthSignals = [20, 60, 100, 140, 180, 220];

const isCRTInX = (cycle: number, X: number) =>
  cycle === X || cycle === X - 1 || cycle === X + 1;

// Solutions
export const part1 = (commands: string[]): number => {
	// solution part 1
  let currentCycle = 1;
  let X = 1;
  let signalStrengthsSum = 0;

  const checkAndSumSignalStrength = () => {
    if (strengthSignals.includes(currentCycle)) {
      signalStrengthsSum += currentCycle * X;
    }
  }

  commands.forEach((command) => {
    checkAndSumSignalStrength();
    if (command === 'noop') {
      currentCycle++;

      return;
    }
    const [, addX] = command.split(' ');
    currentCycle++;

    checkAndSumSignalStrength();
    currentCycle++;
    X += Number(addX);
  });

  return signalStrengthsSum;
}

export const part2 = (commands: string[]): string[][] => {
	// solution part 2
  const display = nArray(6).map(() => nArray(40));
  let currentCycle = 1;
  let X = 1;

  const draw = () => {
    const row = Math.floor((currentCycle - 1) / 40);
    const column = (currentCycle - 1) % 40;

    display[row][column] = isCRTInX(column , X) ? '#' : '.';
  }

  commands.forEach((command) => {
    draw();
    if (command === 'noop') {
      currentCycle++;

      return;
    }
    const [, addX] = command.split(' ');
    currentCycle++;
    draw();

    currentCycle++;
    X += Number(addX);
  });

  // used this for better see the display
  // const CRT = display.map((arr) => arr.join(''));

  return display;
}