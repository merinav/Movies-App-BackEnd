import { expect } from '@jest/globals';
import { validate } from './../../src/validators/title.validator';
//import { getMovies as mockGetMovies } from './../../src/services/movie.service';

const testString = {
  lettersOnlyCapital: 'ABCDE',
  lettersOnly: 'Abcde',
  numbersOnly: '0123',
  singleDash: '-',
  dotsOnly: '...',
  spaceOnly: ' ',
  lettersNumber: 'Abcde2',
  lettersNumberDash: 'Abcde2-',
  lettersNumberDashDot: 'Abcde2-.',
  lettersNumberDashDotSpace: 'Abcde2-. ',
  emptyString: '',
  symbolString: '&*+',
};

describe('Validate()', () => {
  it('should return TRUE', () => {
    expect(validate(testString.lettersOnlyCapital)).toBeTruthy();
  });
  it('should return TRUE', () => {
    expect(validate(testString.lettersOnly)).toBeTruthy();
  });
  it('should return TRUE', () => {
    expect(validate(testString.numbersOnly)).toBeTruthy();
  });
  it('should return TRUE', () => {
    expect(validate(testString.singleDash)).toBeTruthy();
  });
  it('should return TRUE', () => {
    expect(validate(testString.dotsOnly)).toBeTruthy();
  });
  it('should return TRUE', () => {
    expect(validate(testString.spaceOnly)).toBeTruthy();
  });
  it('should return TRUE', () => {
    expect(validate(testString.lettersNumber)).toBeTruthy();
  });
  it('should return TRUE', () => {
    expect(validate(testString.lettersNumberDash)).toBeTruthy();
  });
  it('should return TRUE', () => {
    expect(validate(testString.lettersNumberDashDot)).toBeTruthy();
  });
  it('should return TRUE', () => {
    expect(validate(testString.lettersNumberDashDotSpace)).toBeTruthy();
  });
  it('should return FALSE', () => {
    expect(validate(testString.emptyString)).toBeFalsy();
  });
  it('should return FALSE', () => {
    expect(validate(testString.symbolString)).toBeFalsy();
  });
});
