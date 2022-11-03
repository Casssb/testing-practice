import { reverseString } from '../js/reverseString';

test('Expect return to be a string', () => {
  expect(
    typeof reverseString('You want to be a farmer? Here’s a couple of acres!')
  ).toBe('string');
});

test('expect argument to have same length as return', () => {
  expect(reverseString('hola')).toHaveLength(4);
});

test('expect the first part of the argument to be the last part of the return', () => {
  expect(reverseString('Let off some steam Bennet')).toMatch(/^tenneB/);
});

test('expect punctuation to be reversed', () => {
    expect(reverseString('Who is your daddy, and what does he do?')).toMatch(/^[?od]/)
})
