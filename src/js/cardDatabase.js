export const cardDatabase = {
  mastercard: {
    cardName: 'Mastercard',
    iin: [
      { from: 2221, to: 2720 },
      { from: 51, to: 55 },
    ],
    length: [16],
  },
  visaelectron: {
    cardName: 'Visa Electron',
    iin: [4026, 417500, 4508, 4844, 4913, 4917],
    length: [16],
  },
  visa: {
    cardName: 'Visa',
    iin: [4],
    length: [13, 16, 19],
  },
  jcb: {
    cardName: 'JCB',
    iin: [{ from: 3528, to: 3589 }],
    length: [{ from: 16, to: 19 }],
  },
  dinersclub: {
    cardName: 'Diners Club International',
    iin: [36],
    length: [{ from: 14, to: 19 }],
  },
  mir: {
    cardName: 'MIR',
    iin: [{ from: 2200, to: 2204 }],
    length: [16],
  },
  americanexpress: {
    cardName: 'American Express',
    iin: [34, 37],
    length: [15],
  },
  maestro: {
    cardName: 'Maestro',
    iin: [5018, 5020, 5038, 5893, 6304, 6759, 6761, 6762, 6763],
    length: [{ from: 12, to: 19 }],
  },
  maestrouk: {
    cardName: 'Maestro UK',
    iin: [6759, 676770, 676774],
    length: [{ from: 12, to: 19 }],
  },
  dankort: {
    cardName: 'Dankort',
    iin: [5019],
    length: [16],
  },
  discover: {
    cardName: 'Discover',
    iin: [{ from: 622126, to: 622925 }, 6011, 644, 645, 646, 647, 648, 649, 65],
    length: [{ from: 16, to: 19 }],
  },
  unionpay: {
    cardName: 'China UnionPay',
    iin: [62],
    length: [{ from: 16, to: 19 }],
  },
  troy: {
    cardName: 'Troy',
    iin: [{ from: 979200, to: 979289 }],
    length: [16],
  },
};
