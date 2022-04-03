import { v4 as uuidv4 } from 'uuid';

export function randRange(start: number, end: number) {
  const range = end - start;
  return Math.floor(Math.random() * (range + 1) + start);
}

export function uuid() {
  return uuidv4().split('-').join('');
}