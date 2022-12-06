import { readRawInput } from '../../file-utils';

// Common
export const getInput = () => readRawInput('day6.txt');

const firstIndexOfNonRepeated = (dataStream: string, windowLength: number) => {
  return dataStream.split('').findIndex((_, index) => {
    const charsWindow = dataStream.slice(index, index + windowLength);

    return charsWindow.length === new Set(charsWindow).size;
  })
}

// Solutions
export const part1 = (chars: string): number =>
  firstIndexOfNonRepeated(chars, 4) + 4

export const part2 = (chars: string): number =>
  firstIndexOfNonRepeated(chars, 14) + 14