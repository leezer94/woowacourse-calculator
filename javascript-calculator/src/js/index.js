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

  addFirstNumToStorage({ target }) {
    const sheet = {
      numOne: this.state.zero,
      numTwo: this.state.zero,
      operator: '',
    };

    target = target.innerText;

    if (
      target === this.state.operations.multiplication ||
      target === this.state.operations.division ||
      target === this.state.operations.subtraction ||
      target === this.state.operations.addition
    ) {
      sheet.numOne = this.$.total.innerText;
      sheet.operator = target;
      this.initDisplay();
    }

    localStorage.array = JSON.stringify(sheet);
  }

  addSecondNumToStorage() {
    const sheet = JSON.parse(localStorage.getItem(this.state.storage));

    sheet.numTwo = this.$.total.innerText;

    localStorage.setItem(this.state.storage, JSON.stringify(sheet));
  }

  calculate() {
    this.addSecondNumToStorage();

    const sheet = JSON.parse(localStorage.getItem(this.state.storage));
    const { numOne, numTwo, operator } = sheet;

    if (operator === this.state.operations.addition)
      this.$.total.innerText = Math.floor(Number(numOne) + Number(numTwo));
    if (operator === this.state.operations.subtraction)
      this.$.total.innerText = Math.floor(Number(numOne) - Number(numTwo));
    if (operator === this.state.operations.multiplication)
      this.$.total.innerText = Math.floor(Number(numOne) * Number(numTwo));
    if (operator === this.state.operations.division)
      this.$.total.innerText = Math.floor(Number(numOne) / Number(numTwo));
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
