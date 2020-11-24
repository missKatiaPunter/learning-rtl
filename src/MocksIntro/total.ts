import { sum } from './add';

export const total = (x: number, y: number):string => `$${sum(x,y)}`;