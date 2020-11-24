import { sum } from './sum';

//Actual unit test - testing an independent single function:

test('Numbers are added coorectly', () => {
    expect(sum(2,2)).toBe(4);
    expect(sum(20,5)).toEqual(25); //use to compare obj when diff instances
});

//Fake function that may be used for spying:

let subtract = jest.fn();

test('Check spy has not been called', () => {
    expect(subtract).toHaveBeenCalledTimes(0);
})