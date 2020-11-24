import { total } from './total';
// import { sum } from './sum';


//As total depends on sum it's an integration test
test('that total works', () => {
    expect(total(1,1)).toBe('$2');
});

// jest.mock('./sum');

// const sum = sum.default as jest.Mock;

// test('total and sum work', () => {
    // expect(total(5,20)).toBe('$12');
    // expect(sum).toHaveBeenCalledTimes(1);
    //Redundant tests to show mock implementation
    // sum.mockImplementation(() => 30);
    // expect(total(10,20)).toBe('$30');
    // expect(sum).toHaveBeenCalledTimes(2);
// });