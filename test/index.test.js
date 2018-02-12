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

test('absolute',function(){
  const expected = [3,5,10];
  const result = functions.absolute([-3,+5,+10]);
  expect(result).toEqual(expected);
});

test('absolute',function(){
  const numInputNumbers = [-3,+5,+10];
  const expected = [-3,+5,+10];
  functions.absolute( numInputNumbers);
  expect(numInputNumbers).toEqual(expected);
});


test('concatNames',function(){
  const concatInput = [{firstName: 'Alan',lastName: 'Sugar'},{firstName: 'Pablo', lastName: 'Picasso'}];
  const expected = ['Alan Sugar','Pablo Picasso'];
  const result = functions.concatNames(concatInput);
  const intactInput = [{firstName: 'Alan',lastName: 'Sugar'},{firstName: 'Pablo', lastName: 'Picasso'}];
  expect(result).toEqual(expected);
  expect(concatInput).toEqual(intactInput);
});

test('numbersToStrings', function(){
  const numberStringInput = ['things', 1,3,'hello', '1',20];
  const expected = ['things', '1','3','hello', '1','20'];
  const result = functions.numbersToStrings(numberStringInput);
  const intactNumString = ['things', 1,3,'hello', '1',20];
  expect(result).toEqual(expected);
  expect(numberStringInput).toEqual(intactNumString);
});


test('sortByLength', function(){
  const sortByLengthInput = ['stuff','thingymajig','sunnyday'];
  const expected = ['stuff','sunnyday','thingymajig'];
  const result = functions.sortByLength(sortByLengthInput);
  const intactByLength = ['stuff','thingymajig','sunnyday'];
  expect(result).toEqual(expected);
  expect(sortByLengthInput).toEqual(intactByLength);
});

test('lastTwo', function(){
  const lastTwoSInput = [1,5,120,30,88];
  const expected = [30,88];
  const result = functions.lastTwo(lastTwoSInput);
  const intactLastTwo = [1,5,120,30,88];
  expect(result).toEqual(expected);
  expect(lastTwoSInput).toEqual(intactLastTwo);
});

test('incrementYear', function(){
  const carsInput = [{
   make: "Vauxhall",
   model: "Astra",
   year: 1992
}, {
   make: "Honda",
   model: "Accord",
   year: 1987
},
{
   make: "Fiat",
   model: "500",
   year: 2003
}];
  const expected = [{
   make: "Vauxhall",
   model: "Astra",
   year: 1993
}, {
   make: "Honda",
   model: "Accord",
   year: 1988
},
{
   make: "Fiat",
   model: "500",
   year: 2004
}];
  const result = functions.incrementYear(carsInput);
  const intactCarsInput = [{
   make: "Vauxhall",
   model: "Astra",
   year: 1992
}, {
   make: "Honda",
   model: "Accord",
   year: 1987
},
{
   make: "Fiat",
   model: "500",
   year: 2003
}];
  expect(result).toEqual(expected);
  expect(carsInput).toEqual(intactCarsInput);
});

test('totalSales', function(){
  const salesInput = {
  Max: [35,67,888,90],
  Bob: [7,90,23,15],
  Ellen: [456,789,123],
};
  const expected = {
  Max: 1080,
  Bob: 135,
  Ellen: 1368,
  };
  const result = functions.totalSales(salesInput);
  const intactSales = {
  Max: [35,67,888,90],
  Bob: [7,90,23,15],
  Ellen: [456,789,123],
};
  expect(result).toEqual(expected);
  expect(salesInput).toEqual(intactSales);
});

test.only('swapKeysAndValues', function(){
  const swapKeysInput = { a: 'b', c: 'd', e: 'f'};
  const expected = { b: 'a', d: 'c', f: 'e'};
  const result = functions.swapKeysAndValues(swapKeysInput);
  const intactSwapKeys = { a: 'b', c: 'd', e: 'f'};
  expect(result).toEqual(expected);
  expect(swapKeysInput).toEqual(intactSwapKeys);
});
