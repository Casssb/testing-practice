const analyzeArray = (array) => {
  return {
    average: array.reduce((a, b) => a + b, 0) / 2,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
};

console.log(analyzeArray([4, 7, 88, 99, 123]));
export { analyzeArray };
