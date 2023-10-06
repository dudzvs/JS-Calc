const previousOperationText = document.querySelector('#previous-operation');
const currentOperationText = document.querySelector('#current-operation')

class Calculator {
  constructor(previousOperationText, currentOperationText) {
    this.previousOperationText = previousOperationText;
    this.currentOperationText = currentOperationText;
    this.currentOperation = "";
  }

  operations(operation) {
    // current and previous value
    let operationValue;
    const previous = +this.previousOperationText.innerText.split(" ")[0];
    const current = +this.currentOperationText.innerText;

    switch(operation){
      case "+":
        operationValue = previous + current;
        this.updateScreen(operationValue, operation, current, previous)
      break;
      default:
        return
    }

  }

  addDigit(digit) {
    if(digit === "." && this.currentOperationText.innerText.includes(".")) {
      return;
    }
    this.currentOperation = digit; 
    this.updateScreen();
  }

  updateScreen(operationValue = null, operation = null, current = null, previous = null) {
    if(operationValue === null) {
      this.currentOperationText.innerText += this.currentOperation;
    }else {
      if(previous === 0) {
        operationValue = current
      }

      this.previousOperationText.innerText = `${operationValue} ${operation}`
      this.currentOperationText.innerText = ""
    }

    console.log(operationValue, current, previous, operation)
  }
}

const calc = new Calculator(previousOperationText, currentOperationText)

const $html = document.querySelector('html'); 
const toggleMode = document.querySelector('header div');
const buttons = document.querySelectorAll('#button-container button');

buttons.forEach(btn => {
  btn.onclick = function handleBtn (e) {
    const value = e.target.innerText;

    if(+value >= 0 || value === ".") {
      calc.addDigit(value);
    }else {
      calc.operations(value)
    }
  }
})

toggleMode.addEventListener('click', () => {
  $html.classList.toggle('darkMode');
})

