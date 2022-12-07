import { sumArrayValues } from '../../array-utils';
import { readInput } from '../../file-utils';

// Common
export const getInput = () => readInput('day7.txt');

interface Directory {
  children: string[];
  filesSize: number;
}

const MAX_SPACE = 70000000;
const NEEDED_SPACE = 30000000;

const calcDirectorySize = (directory: Directory, directories: Record<string, Directory>): number => {
  if (directory.children.length === 0) {
    return directory.filesSize;
  }

  return directory.children.reduce((total, childDirectory) => {
    return total + calcDirectorySize(directories[childDirectory], directories);
  }, directory.filesSize);
}

const getAllDirectorySizes = (directories: Record<string, Directory>): number[] => {
  return Object.keys(directories).map((key) => {
    const directory = directories[key];

    return calcDirectorySize(directory, directories);
  })
}

const buildDirectories = (commandLines: string[]): Record<string, Directory> => {
  let currentDir: string = '';
  const directories: Record<string, Directory> = {};

  commandLines.forEach((line) => {
    if (line.includes('$ cd ..')) {
      currentDir = currentDir.slice(0, currentDir.lastIndexOf('/'));
    } else if (line.includes('$ cd')) {
      const [_, __, dir] = line.split(' ');
      currentDir = currentDir + '/' + dir;
    } else if (line.includes('$ ls')) {
      directories[currentDir] = {
        children: [],
        filesSize: 0,
      }
    } else if (!line.includes('$')) {
      if (line.includes('dir')) {
        const [_, childDir] = line.split(' ');
        directories[currentDir].children.push(currentDir + '/' + childDir);
      } else {
        const [size] = line.split(' ');
        directories[currentDir].filesSize += Number(size);
      }
    }
  });

  return directories;
}

// Solutions
export const part1 = (commandLines: string[]): number => {
	// solution part 1
  const directories = buildDirectories(commandLines);
  const dirSizes = getAllDirectorySizes(directories);

  return sumArrayValues(dirSizes.filter((size) => size <= 100000));
}

export const part2 = (commandLines: string[]): number => {
	// solution part 2
  const directories = buildDirectories(commandLines);
  const dirSizes = getAllDirectorySizes(directories);

  const usedSpace = Math.max(...dirSizes);
  const currentFreeSpace = MAX_SPACE - usedSpace;
  const spaceToDelete =  NEEDED_SPACE - currentFreeSpace;

  return Math.min(...dirSizes.filter((size) => size >= spaceToDelete));
}