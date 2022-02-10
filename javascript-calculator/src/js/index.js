class Calculator {
  constructor() {
    this.$ = {
      total: document.querySelector('#total'),
      digits: document.querySelector('.digits'),
    };

    this.bindEventListeners();
  }

  onClickDigitBtn({ target }) {
    const digit = target.innerText;

    if (this.$.total.innerText === '0') {
      return (this.$.total.innerText = digit);
    } else {
      return (this.$.total.innerText += digit);
    }
  }

  bindEventListeners() {
    this.$.digits.addEventListener('click', this.onClickDigitBtn.bind(this));
  }
}

new Calculator();
