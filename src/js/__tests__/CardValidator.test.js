import CardValidator from '../CardValidator';

describe('Testing CardValidator.checkRange(...)', () => {
  test.each([
    ['16 is in 16', 16, 16, true],
    ['16 is in 15-16', 16, { from: 15, to: 16 }, true],
    ['16 is in 16-17', 16, { from: 16, to: 17 }, true],
    ['16 is in 16-16', 16, { from: 16, to: 16 }, true],
    ['16 is in -100-999', 16, { from: -100, to: 999 }, true],
    ["16 isn't in 11-15", 16, { from: 11, to: 15 }, false],
    ["16 isn't in 17", 16, 17, false],
  ])('%s', (_, number, range, expected) => {
    const result = CardValidator.checkRange(number, range);
    expect(result).toBe(expected);
  });
});
