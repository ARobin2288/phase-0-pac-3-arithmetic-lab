function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function increment(a) {
  return (a += 1);
}

function decrement(a) {
  return (a -= 1);
}

function makeInt(a) {
  const parsed = parseInt(a, 10);
  return parsed;
}
makeInt("2");

function preserveDecimal(n) {
  const parsed = parseFloat(n);
  return parsed;
}
preserveDecimal("2.22");
