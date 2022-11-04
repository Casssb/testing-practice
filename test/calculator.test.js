import { Calculator } from '../js/calculator';

const calc = Calculator();

test('expect return to be a number', () => {
    expect(
      typeof calc.add(6,6)
    ).toBe('number');
  });

test('expect calculator.add to add 2 numbers', () => {
  expect(calc.add(2, 4)).toEqual(6);
});

test('expect calculator.subtract to subtract 2 numbers', () => {
  expect(calc.subtract(10, 5)).toEqual(5);
});

test('expect calculator.divide to divide 2 numbers', () => {
  expect(calc.divide(20, 10)).toEqual(2);
});

test('expect calculator.multiply to multiply 2 numbers', () => {
  expect(calc.multiply(2, 4)).toEqual(8);
});
