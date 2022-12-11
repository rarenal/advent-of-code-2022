import { Monkey } from './day11';

export const monkeys: Monkey[] = [
  {
    items: [59, 65, 86, 56, 74, 57, 56],
    operation: (old: number) => old * 17,
    throwTo: (value: number) => value % 3 === 0 ? 3 : 6,
    modulus: 3,
    inspectedItems: 0,
  },
  {
    items: [63, 83, 50, 63, 56],
    operation: (old: number) => old + 2,
    throwTo: (value: number) => value % 13 === 0 ? 3 : 0,
    modulus: 13,
    inspectedItems: 0,
  },
  {
    items: [93, 79, 74, 55],
    operation: (old: number) => old + 1,
    throwTo: (value: number) => value % 2 === 0 ? 0 : 1,
    modulus: 2,
    inspectedItems: 0,
  },
  {
    items: [86, 61, 67, 88, 94, 69, 56, 91],
    operation: (old: number) => old + 7,
    throwTo: (value: number) => value % 11 === 0 ? 6 : 7,
    modulus: 11,
    inspectedItems: 0,
  },
  {
    items: [76, 50, 51],
    operation: (old: number) => old * old,
    throwTo: (value: number) => value % 19 === 0 ? 2 : 5,
    modulus: 19,
    inspectedItems: 0,
  },
  {
    items: [77, 76],
    operation: (old: number) => old + 8,
    throwTo: (value: number) => value % 17 === 0 ? 2 : 1,
    modulus: 17,
    inspectedItems: 0,
  },
  {
    items: [74],
    operation: (old: number) => old * 2,
    throwTo: (value: number) => value % 5 === 0 ? 4 : 7,
    modulus: 5,
    inspectedItems: 0,
  },
  {
    items: [86, 85, 52, 86, 91, 95],
    operation: (old: number) => old + 6,
    throwTo: (value: number) => value % 7 === 0 ? 4 : 5,
    modulus: 7,
    inspectedItems: 0,
  },
]

export const testMonkeys: Monkey[] = [
  {
    items: [79, 98],
    operation: (old: number) => old * 19,
    throwTo: (value: number) => value % 23 === 0 ? 2 : 3,
    modulus: 23,
    inspectedItems: 0,
  },
  {
    items: [54, 65, 75, 74],
    operation: (old: number) => old + 6,
    throwTo: (value: number) => value % 19 === 0 ? 2 : 0,
    modulus: 19,
    inspectedItems: 0,
  },
  {
    items: [79, 60, 97],
    operation: (old: number) => old * old,
    throwTo: (value: number) => value % 13 === 0 ? 1 : 3,
    modulus: 13,
    inspectedItems: 0,
  },
  {
    items: [74],
    operation: (old: number) => old + 3,
    throwTo: (value: number) => value % 17 === 0 ? 0 : 1,
    modulus: 17,
    inspectedItems: 0,
  },
]