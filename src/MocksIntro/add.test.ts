import { sum } from './add';

test('Numbers are added coorectly', () => {
    expect(sum(2,2)).toBe(4);
})