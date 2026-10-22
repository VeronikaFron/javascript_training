class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiple(a, b) {
    return a * b;
  }

  divide(a, b) {
    return a / b;
  }
}

const calculator = new Calculator();

console.log(`14 + 41 = ${calculator.add(14, 41)}`);
console.log(`174 - 32 = ${calculator.subtract(174, 32)}`);
console.log(`47 * 50 = ${calculator.multiple(47, 50)}`);
console.log(`125 / 7 = ${calculator.divide(125, 7)}`);
