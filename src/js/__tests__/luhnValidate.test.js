import luhnValidate from '../luhnValidate';

describe('Testing Luhn', () => {
  test.each([
    ['2203475058424495 is valid', 2203475058424495, true],
    ['2203475058424496 is invalid', 2203475058424496, false],
    ['341986448767051 is valid', 341986448767051, true],
    ['341986448767055 is invalid', 341986448767055, false],
    ['2221180276379079 is valid', 2221180276379079, true],
    ['3221180276379079 is invalid', 3221180276379079, false],
  ])('%s', (_, cardNumber, expected) => {
    const result = luhnValidate(cardNumber);
    expect(result).toBe(expected);
  });
});
