import { expect } from '@jest/globals';
import { validate } from './../../src/validators/title.validator';

//const lettersOnlyCapital = 'ABCDE';
// const lettersOnly = 'Abcde';
// const numbersOnly = '0123';
// const dashesOnly = '-';
// const dotsOnly = '.';
// const spaceOnly = ' ';
// const lettersNumber = 'Abcde2';
// const lettersNumberDashes = 'Abcde2-';
// const lettersNumberDashesDots = 'Abcde2-.';
// const lettersNumberDashDotSpace = 'Abcde2-. ';
// const emptyString = '';
// const symbolString = 'Abcde2-. &*';

const testString = {
  lettersOnlyCapital: 'ABCDE',
  lettersOnly: 'Abcde',
};

describe('Validate()', () => {
  it('should return TRUE', () => {
    expect(validate(testString.lettersOnlyCapital)).toBeTruthy();
  });
  it('should return TRUE', () => {
    expect(validate(testString.lettersOnly)).toBeTruthy();
  });
});

// test('checks if lettersOnlyCapital is valid', () => {
//   expect(validate(lettersOnlyCapital)).toBeTruthy
// });
// test('checks if lettersOnly is valid', () => {
//     expect(validate(lettersOnly)).toBeTruthy;  });
// test('checks if numbersOnly is valid', () => {
//     expect(validate(numbersOnly)).toBeTruthy;  });
// test('checks if dashesOnly is valid', () => {
//     expect(validate(dashesOnly)).toBeTruthy;  });
// test('checks if dotsOnly is valid', () => {
//     expect(validate(dotsOnly)).toBeTruthy;  });
// test('checks if spaceOnly is valid', () => {
//     expect(validate(spaceOnly)).toBeTruthy;  });
// test('checks if lettersNumber is valid', () => {
//     expect(validate(lettersNumber)).toBeTruthy;  });
// test('checks if lettersNumberDashes is valid', () => {
//     expect(validate(lettersNumberDashes)).toBeTruthy;  });
// test('checks if lettersNumberDashesDots is valid', () => {
//     expect(validate(lettersNumberDashesDots)).toBeTruthy;  });
// test('checks if lettersNumberDashDotSpace is valid', () => {
//     expect(validate(lettersNumberDashDotSpace)).toBeTruthy;  });

// test('checks if emptyString is valid', () => {
//     expect(validate(emptyString)).toBeFalsy;  });
// test('checks if symbolString is valid', () => {
//     expect(validate(symbolString)).toBeFalsy;  });
