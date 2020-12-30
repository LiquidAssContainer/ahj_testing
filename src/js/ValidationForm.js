import { validationFormHTML } from './validationFormHTML';
import CardValidator from './CardValidator';
import CardStyling from './CardStyling';

export default class ValidationForm {
  constructor(parentElem) {
    this.parentElem = parentElem;
  }

  showMessage(message) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = message;
    errorMessage.classList.remove('hidden');
  }

  addEventListeners() {
    const input = document.getElementById('card-number-input');
    const form = document.getElementById('form');

    input.addEventListener('input', () => {
      input.classList.remove('valid', 'invalid');

      const valueLength = input.value.length;
      if (valueLength > 19) {
        input.value = input.value.slice(0, 19);
      }

      const errorMessage = document.getElementById('error-message');
      errorMessage.classList.add('hidden');

      const cardname = CardValidator.getCardnameByIIN(+input.value);
      CardStyling.changeStyle(cardname);
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const checkResult = CardValidator.checkCardNumber(+input.value);
      input.classList.remove('valid', 'invalid');
      if (checkResult.success) {
        input.classList.add('valid');
      } else {
        input.classList.add('invalid');
      }
      this.showMessage(checkResult.message);
    });
  }

  bindToDOM() {
    this.parentElem.insertAdjacentHTML('beforeend', this.markup);
    this.addEventListeners();
  }

  get markup() {
    return `<div class="form-wrapper">
    <form id="form">
      <label class="form-label">
        <span class="label-text">Введите номер карты</span>
        <input id="card-number-input" type="number">
      </label>
      <button id="submit">Проверить</button>
    </form>
    <div id="error-message" class="hidden">Ошибка</div>
    <img class="card-logo">
    </div>`;
  }
}
