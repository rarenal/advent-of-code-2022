import { readInput } from '../../file-utils';

// Common
export const getInput = () => readInput('day8.txt')
  .map((row) => row.split('')
  .map(Number));

const isSmallerThan = (treeHeight: number) => (tree: number) => tree < treeHeight;

const isVisible = (i: number, j:number , row: number[], column: number[]) => {
  if (i == 0 || j == 0 || i == column.length - 1 || j == row.length - 1) {
    return true;
  }

  const visibleLeft = row.slice(0, j).every(isSmallerThan(row[j]));
  const visibleRight = row.slice(j + 1).every(isSmallerThan(row[j]));
  const visibleUp = column.slice(0, i).every(isSmallerThan(row[j]));
  const visibleDown = column.slice(i + 1).every(isSmallerThan(row[j]));

  return visibleLeft || visibleRight || visibleUp || visibleDown;
};

const calcVisibleTreesFrom = (treeHeight: number, adjacentTrees: number[]) => {
  let visibleTrees = 0;
  for (let i = 0; i < adjacentTrees.length; i++) {
    visibleTrees++;
    if (adjacentTrees[i] >= treeHeight) {
      break;
    }
  }

  return visibleTrees;
}

const calcScenicScore = (i: number, j:number , row: number[], column: number[]): number => {
  if (i == 0 || j == 0 || i == column.length - 1 || j == row.length - 1) {
    return 0;
  }

  const leftTrees = calcVisibleTreesFrom(row[j], row.slice(0, j).reverse());
  const rightTrees = calcVisibleTreesFrom(row[j], row.slice(j + 1));
  const upTrees = calcVisibleTreesFrom(row[j], column.slice(0, i).reverse());
  const downTrees = calcVisibleTreesFrom(row[j], column.slice(i + 1));

  return leftTrees * rightTrees * upTrees * downTrees;
}

// Solutions
export const part1 = (treesGrid: number[][]): number => {
	// solution part 1
  let visibleTrees = 0;

  treesGrid.forEach((treesRow, i) => {
    treesRow.forEach((treeHeight, j) => {
      const treeColumn = treesGrid.map((row) => row[j]);
      const isTreeVisible = isVisible(i, j, treesRow, treeColumn)

      if (isTreeVisible) {
        visibleTrees++;
      }
    });
  });

  return visibleTrees;
}

export const part2 = (treesGrid: number[][]): any => {
	// solution part 2
  let highestScenicScore = 0;

  treesGrid.forEach((treeRow, i) => {
    treeRow.forEach((treeHeight, j) => {
      const treeColumn = treesGrid.map((row) => row[j]);
      const scenicScore = calcScenicScore(i, j, treeRow, treeColumn);

      if (scenicScore > highestScenicScore) {
        highestScenicScore = scenicScore;
      }
    });
  });

  return highestScenicScore;
}