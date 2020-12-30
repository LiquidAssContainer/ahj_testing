/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/css/main.css
// extracted by mini-css-extract-plugin

// CONCATENATED MODULE: ./src/js/validationFormHTML.js
const validationFormHTML = `
<form id="form">
  <label class="form-label">
    <span class="label-text">Введите номер карты</span>
    <input id="card-number-input" type="number">
  </label>
  <button id="submit">Проверить</button>
</form>
<div id="error-message" class="hidden">Ошибка</div>
<img class="card-logo">
`;
// CONCATENATED MODULE: ./src/js/luhnValidate.js
function luhnValidate(number) {
  const cardNumber = String(number);
  let sum = 0;

  for (let i = 0; i < cardNumber.length; i += 1) {
    let cardNum = parseInt(cardNumber[i], 10);

    if ((cardNumber.length - i) % 2 === 0) {
      cardNum *= 2;

      if (cardNum > 9) {
        cardNum -= 9;
      }
    }

    sum += cardNum;
  }

  return sum % 10 === 0;
}
// CONCATENATED MODULE: ./src/js/cardDatabase.js
const cardDatabase = {
  mastercard: {
    cardName: 'Mastercard',
    iin: [{
      from: 2221,
      to: 2720
    }, {
      from: 51,
      to: 55
    }],
    length: [16]
  },
  visaelectron: {
    cardName: 'Visa Electron',
    iin: [4026, 417500, 4508, 4844, 4913, 4917],
    length: [16]
  },
  visa: {
    cardName: 'Visa',
    iin: [4],
    length: [13, 16, 19]
  },
  jcb: {
    cardName: 'JCB',
    iin: [{
      from: 3528,
      to: 3589
    }],
    length: [{
      from: 16,
      to: 19
    }]
  },
  dinersclub: {
    cardName: 'Diners Club International',
    iin: [36],
    length: [{
      from: 14,
      to: 19
    }]
  },
  mir: {
    cardName: 'MIR',
    iin: [{
      from: 2200,
      to: 2204
    }],
    length: [16]
  },
  americanexpress: {
    cardName: 'American Express',
    iin: [34, 37],
    length: [15]
  },
  maestro: {
    cardName: 'Maestro',
    iin: [5018, 5020, 5038, 5893, 6304, 6759, 6761, 6762, 6763],
    length: [{
      from: 12,
      to: 19
    }]
  },
  maestrouk: {
    cardName: 'Maestro UK',
    iin: [6759, 676770, 676774],
    length: [{
      from: 12,
      to: 19
    }]
  },
  dankort: {
    cardName: 'Dankort',
    iin: [5019],
    length: [16]
  },
  discover: {
    cardName: 'Discover',
    iin: [{
      from: 622126,
      to: 622925
    }, 6011, 644, 645, 646, 647, 648, 649, 65],
    length: [{
      from: 16,
      to: 19
    }]
  },
  unionpay: {
    cardName: 'China UnionPay',
    iin: [62],
    length: [{
      from: 16,
      to: 19
    }]
  },
  troy: {
    cardName: 'Troy',
    iin: [{
      from: 979200,
      to: 979289
    }],
    length: [16]
  }
};
// CONCATENATED MODULE: ./src/js/CardValidator.js


class CardValidator_CardValidator {
  static checkCardNumber(cardNumber) {
    const cardname = this.getCardnameByIIN(cardNumber);

    if (!cardname) {
      return {
        success: false,
        message: 'Нет таких карт!'
      };
    }

    const isLengthValid = this.checkLength(cardNumber, cardDatabase[cardname].length);

    if (!isLengthValid) {
      return {
        success: false,
        message: 'У вас неверное количество циферок!'
      };
    }

    const validWithLuhn = luhnValidate(cardNumber);

    if (!validWithLuhn) {
      return {
        success: false,
        message: 'Всё вроде бы верно, но такой карты быть не может'
      };
    }

    return {
      success: true,
      message: 'Всё круто и классно'
    };
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
// CONCATENATED MODULE: ./src/js/cardStyles.js
const cardStyles = {
  mastercard: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg',
    color: '#000',
    dark: true
  },
  unionpay: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/UnionPay_logo.svg',
    color: 'darkblue',
    dark: true
  },
  visa: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Visa_2014_logo_detail.svg',
    color: '#00f',
    dark: true
  },
  visaelectron: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Visa_Electron.svg',
    color: '#016fd0',
    dark: true
  },
  americanexpress: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg',
    color: '#016fd0',
    dark: true
  },
  mir: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Mir-logo.SVG.svg',
    color: '#00b4ff'
  },
  discover: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Discover_Card_logo.svg',
    color: '#00b4ff'
  },
  dankort: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Dankort_logo.png',
    color: '#00b4ff'
  },
  jcb: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/4/40/JCB_logo.svg',
    color: '#00b4ff'
  },
  dinersclub: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Diners_Club_Logo3.svg',
    color: '#00b4ff'
  },
  troy: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Troy_logo.png',
    color: '#00b4ff'
  }
};
// CONCATENATED MODULE: ./src/js/CardStyling.js

class CardStyling_CardStyling {
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
// CONCATENATED MODULE: ./src/js/ValidationForm.js



class ValidationForm_ValidationForm {
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
      const cardname = CardValidator_CardValidator.getCardnameByIIN(+input.value);
      CardStyling_CardStyling.changeStyle(cardname);
    });
    form.addEventListener('submit', e => {
      e.preventDefault();
      const checkResult = CardValidator_CardValidator.checkCardNumber(+input.value);
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
// CONCATENATED MODULE: ./src/js/app.js

const formSection = document.getElementsByClassName('form-section')[0];
const validationForm = new ValidationForm_ValidationForm(formSection);
validationForm.bindToDOM(); // validationForm.addEventListeners();
// CONCATENATED MODULE: ./src/index.js



/***/ })
/******/ ]);