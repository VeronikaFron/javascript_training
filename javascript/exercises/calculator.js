function add(a, b) {
  const result = a + b;
  console.log(`${a} + ${b} = ${result}`);
}

function subtract(a, b) {
  const result = a - b;
  console.log(`${a} - ${b} = ${result}`);
}

function multiply(a, b) {
  const result = a * b;
  console.log(`${a} * ${b} = ${result}`);
}

function divide(a, b) {
  if (b === 0) {
    console.log("Chyba: Dělení nulou není povoleno.");
    return;
  }

  const result = a / b;
  console.log(`${a} / ${b} = ${result}`);
}

function power(a, b) {
  const result = a ** b;
  console.log(`${a} ** ${b} = ${result}`);
}

add(15, 48);
subtract(98, 41);
multiply(54, 30);
divide(88, 6);
divide(10, 0);
power(2, 3);
