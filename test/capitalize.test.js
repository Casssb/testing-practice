import { capitalize } from '../js/capitalize';

test('expect the first letter of any given string to be capital', () => {
  expect(capitalize('oh hi, Mark')).toBe('Oh hi, Mark');
});

test('expect strings that start with a capital to be unchanged ', () => {
  expect(capitalize('Anyway, How Is Your Sex Life?')).not.toBe(
    'anyway, How Is Your Sex Life?'
  );
});

test('expect the argument passed to be truthy (no empty string)', () => {
  expect(capitalize('You Are Tearing Me Apart, Lisa!')).toBeTruthy;
});
