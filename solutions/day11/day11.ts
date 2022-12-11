// Common
import { nArray } from '../../array-utils';

export interface Monkey {
  items: number[];
  operation: (old: number) => number;
  throwTo: (value: number) => number;
  modulus: number;
  inspectedItems: number;
}

// Solutions
export const part1 = (monkeys: Monkey[]): number => {
	// solution part 1
  nArray(20).forEach(() => {
    for (let i=0; i < monkeys.length; i++) {
     const monkey = monkeys[i];
     nArray(monkey.items.length).forEach(() => {
       const itemWorry = monkey.items.shift();
       const newWorry = Math.floor(monkey.operation(itemWorry) / 3);
       const monkeyIndex = monkey.throwTo(newWorry);

       monkeys[monkeyIndex].items.push(newWorry);
       monkey.inspectedItems++;
     });
    }
  });

  const [top1, top2] = monkeys.sort((a, b) => b.inspectedItems - a.inspectedItems);

  return top1.inspectedItems * top2.inspectedItems;
}

export const part2 = (monkeys: Monkey[]): number => {
	// solution part 2
  const commonModulus = monkeys.reduce((total, monkey) => total * monkey.modulus, 1);

  nArray(10000).forEach(() => {
    for (let i=0; i < monkeys.length; i++) {
      const monkey = monkeys[i];
      nArray(monkey.items.length).forEach(() => {
        const itemWorry = monkey.items.shift();
        const newWorry = monkey.operation(itemWorry) % commonModulus;
        const monkeyIndex = monkey.throwTo(newWorry);

        monkeys[monkeyIndex].items.push(newWorry);
        monkey.inspectedItems++;
      });
    }
  });

  const [top1, top2] = monkeys.sort((a, b) => b.inspectedItems - a.inspectedItems);

  return top1.inspectedItems * top2.inspectedItems;
}