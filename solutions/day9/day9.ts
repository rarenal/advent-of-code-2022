import * as querystring from 'querystring';
import { nArray } from '../../array-utils';
import { readInput } from '../../file-utils';

// Common
export const getInput = () => readInput('day9.txt');

const getCoords = (coords: string) =>
  coords.split('|')
    .map(Number);

const moveNode = ([iPrev, jPrev]: [number, number], [iCurrent, jCurrent]: [number, number]): string => {
  let newI = iCurrent;
  let newJ = jCurrent;

  if (iPrev === iCurrent) {
    newJ = jPrev <= jCurrent ? jCurrent - 1 : jCurrent + 1;
  } else if (jPrev === jCurrent) {
    newI = iPrev <= iCurrent ? iCurrent - 1 : iCurrent + 1;
  } else {
    newJ = jPrev <= jCurrent ? jCurrent - 1 : jCurrent + 1;
    newI = iPrev <= iCurrent ? iCurrent - 1 : iCurrent + 1;
  }

  return [newI, newJ].join('|');
}

const moveHead = (node: string, direction: string): [number, number] => {
  const [i, j] = node.split('|')
    .map(Number);

  switch (direction) {
    case 'U':
      return [i - 1, j];
    case 'D':
      return [i + 1, j];
    case 'L':
      return [i, j - 1];
    case 'R':
      return [i, j + 1];
  }
}

const isAdjacent = (iHead: number, jHead: number, iTail: number, jTail: number): boolean =>
  Math.abs(iHead - iTail) <= 1 && Math.abs(jHead - jTail) <= 1;

// Solutions
export const part1 = (movements: string[]): number => {
	// solution part 1
  let headPosition = '0|0';
  let tailPosition = '0|0';
  const tailVisitedPositions = new Set(['0|0']);

  movements.forEach((movement) => {
    const [direction, amount] = movement.split(' ');

    nArray(Number(amount)).forEach(() => {
      const [iTail, jTail]  = getCoords(tailPosition);
      const [newIHead, newJHead] = moveHead(headPosition, direction);

      headPosition = `${newIHead}|${newJHead}`;
      if (isAdjacent(newIHead, newJHead, iTail, jTail)) {
        return;
      }

      tailPosition = moveNode([newIHead, newJHead], [iTail, jTail]);

      tailVisitedPositions.add(tailPosition);
    });
  });

  return tailVisitedPositions.size;
}

export const part2 = (movements: string[]): number => {
	// solution part 2
  const ropePositions: string[] = Array(10).fill('0|0');
  const tailVisitedPositions = new Set(['0|0']);

  movements.forEach((movement) => {
    const [direction, amount] = movement.split(' ');

    nArray(Number(amount)).forEach(() => {
      for (let i=0; i < ropePositions.length; i++) {
        if (i === 0) {
          ropePositions[i] = moveHead(ropePositions[i], direction).join('|');

          continue;
        }

        const [iPrev, jPrev] = getCoords(ropePositions[i - 1]);
        const [iCurrent, jCurrent] = getCoords(ropePositions[i]);

        if (isAdjacent(iPrev, jPrev, iCurrent, jCurrent)) {
          return;
        }

        ropePositions[i] = moveNode([iPrev, jPrev], [iCurrent, jCurrent]);

        if (i === 9) {
          tailVisitedPositions.add(ropePositions[i]);
        }
      }
    });
  });

  return tailVisitedPositions.size;
}