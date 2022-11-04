import { analyzeArray } from '../js/analyzeArray';

const testObj = analyzeArray([4, 7, 88, 99, 123]);

test('should return an object', () => {
  expect(typeof testObj).toBe('object');
});

test('.average method should return an average', () => {
  expect(testObj.average).toEqual(160.5);
});

test('.min should return the lowest value', () => {
  expect(testObj.min).toEqual(4);
});

test('.max should return the highest value', () => {
  expect(testObj.max).toEqual(123);
});

test('.length should return the array length', () => {
  expect(testObj.length).toEqual(5);
});

test('is formatted correctly', () => {
  expect(testObj).toMatchObject({
    average: 160.5,
    min: 4,
    max: 123,
    length: 5,
  });
});
