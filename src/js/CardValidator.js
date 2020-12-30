import luhnValidate from './luhnValidate';
import { cardDatabase } from './cardDatabase';

export default class CardValidator {
  static checkCardNumber(cardNumber) {
    const cardname = this.getCardnameByIIN(cardNumber);
    if (!cardname) {
      return { success: false, message: 'Нет таких карт!' };
    }

    const isLengthValid = this.checkLength(cardNumber, cardDatabase[cardname].length);
    if (!isLengthValid) {
      return { success: false, message: 'У вас неверное количество циферок!' };
    }

    const validWithLuhn = luhnValidate(cardNumber);
    if (!validWithLuhn) {
      return { success: false, message: 'Всё вроде бы верно, но такой карты быть не может' };
    }
    return { success: true, message: 'Всё круто и классно' };
  }

  static getCardnameByIIN(cardNumber) {
    for (const card in cardDatabase) {
      for (const iin of cardDatabase[card].iin) {
        let iinLength;
        if (typeof iin === 'number') {
          iinLength = String(iin).length;
        } else {
          iinLength = String(iin.from).length;
        }

        const firstNumbers = +String(cardNumber).slice(0, iinLength);
        const isNumberInRange = this.checkRange(firstNumbers, iin);

        if (isNumberInRange) {
          return card;
        }
      }
    }
    return null;
  }

  static checkLength(cardNumber, lengthList) {
    const cardNumberLength = String(cardNumber).length;

    for (const length of lengthList) {
      const isLengthInRange = this.checkRange(cardNumberLength, length);

      if (isLengthInRange) {
        return true;
      }
    }
    return false;
  }

  static checkRange(number, range) {
    if (typeof range === 'number') {
      return number === range;
    }
    return number >= range.from && number <= range.to;
  }
}
