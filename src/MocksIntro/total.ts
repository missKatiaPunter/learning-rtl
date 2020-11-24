import { sum } from './sum';

export const total = (x: number, y: number):string => `$${sum(x,y)}`;