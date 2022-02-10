class Calculator {
  constructor() {
    this.$ = {
      total: document.querySelector('#total'),
      digits: document.querySelector('.digits'),
      modifiers: document.querySelector('.modifiers'),
      operations: document.querySelector('.operations'),
      equalSign: document.querySelector('.equal-sign'),
    };

    this.bindEventListeners();
    this.state = {
      storage: 'array',
      zero: 0,
      operations: {
        multiplication: 'X',
        division: '/',
        subtraction: '-',
        addition: '+',
      },
      length: 2,
      string: {
        zero: '0',
      },
    };
  }

  onClickDigitBtn({ target }) {
    const digit = target.innerText;

    if (this.isValidLength()) {
      if (this.$.total.innerText === this.state.string.zero) {
        return (this.$.total.innerText = digit);
      } else {
        return (this.$.total.innerText += digit);
      }
    }
  }

  isValidLength() {
    let isValid = false;

    if (this.$.total.innerText.length > this.state.length) {
      isValid;
    } else {
      isValid = true;
    }

    return isValid;
  }

  initDisplay() {
    this.$.total.innerText = this.state.string.zero;
  }

  bindEventListeners() {
    this.$.digits.addEventListener('click', this.onClickDigitBtn.bind(this));
    this.$.modifiers.addEventListener('click', this.initDisplay.bind(this));
    this.$.operations.addEventListener(
      'click',
      this.addFirstNumToStorage.bind(this)
    );
    this.$.equalSign.addEventListener('click', this.calculate.bind(this));
  }
}

new Calculator();
