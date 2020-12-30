import { cardStyles } from './cardStyles';

export default class CardStyling {
  static changeStyle(cardname) {
    const logo = document.getElementsByClassName('card-logo')[0];
    const wrapper = document.getElementsByClassName('form-wrapper')[0];

    if (!cardname) {
      wrapper.style.backgroundColor = '#ccc';
      document.body.removeAttribute('class');
      logo.removeAttribute('src');
      return;
    }

    const card = cardStyles[cardname];
    if (card) {
      wrapper.style.backgroundColor = card.color;
      logo.src = card.src;
      document.body.className = card.dark ? 'dark' : '';
    } else {
      wrapper.style.backgroundColor = '#70f7a8';
      logo.removeAttribute('src');
    }
  }
}
