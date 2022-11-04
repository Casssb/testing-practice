import { caesarCipher } from '../js/caesarCipher';

test('string letters should be shifted 13 places', () => {
  expect(caesarCipher('hello')).toBe('uryyb');
});

test('expect upper/lowercase letters to be shifted 13 letters', () => {
  expect(caesarCipher('HeLlo')).toBe('UrYyb');
});

test('should ignore punctuation', () => {
  expect(caesarCipher('hello, hello, ....hello')).toBe(
    'uryyb, uryyb, ....uryyb'
  );
});
