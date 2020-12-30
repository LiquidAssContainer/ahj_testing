// I don't know where to place this test

import ValidationForm from '../ValidationForm';

describe('Credit Card Validator form', () => {
  test('Expect to be added to DOM correctly', () => {
    document.body.innerHTML = '<section class="form-section"></section>';

    const formSection = document.querySelector('.form-section');
    const validationForm = new ValidationForm(formSection);
    validationForm.bindToDOM();

    expect(formSection.innerHTML).toEqual(validationForm.markup);
  });

  test.each([
    ['2203475058424495 is valid', 2203475058424495, true],
    ['2203475058424496 is invalid', 2203475058424496, false],
    ['341986448767051 is valid', 341986448767051, true],
    ['341986448767055 is invalid', 341986448767055, false],
    ['2221180276379079 is valid', 2221180276379079, true],
    ['3221180276379079 is invalid', 3221180276379079, false],
  ])('%s', (_, cardNumber, expected) => {
    document.body.innerHTML = '<section class="form-section"></section>';

    const formSection = document.querySelector('.form-section');
    const validationForm = new ValidationForm(formSection);
    validationForm.bindToDOM();

    const input = formSection.querySelector('#card-number-input');
    input.value = cardNumber;

    const submit = formSection.querySelector('#submit');
    submit.click();

    expect(input.classList.contains('valid')).toBe(expected);
  });
});
