const functions = require('../src/index.js');

test('multiply',function(){
  const expected = [6,10];
  const result = functions.multiply([3,5],2);
  expect(result).toEqual(expected);
});



test('multiply',function(){
  const numToMultiply = [3,5];
  const expected = [3,5];
  functions.multiply( numToMultiply,2);
  expect(numToMultiply).toEqual(expected);
});

test.only('absolute',function(){
  const expected = [3,5,10];
  const result = functions.absolute([-3,+5,+10]);
  expect(result).toEqual(expected);
});
