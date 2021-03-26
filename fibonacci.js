//fibonacci

const fibonacci = (num) => {
  let prevNumber = 1;
  let currentNumber = 0;
  let cache;

  while (num > 0) {
    cache = prevNumber;
    prevNumber = prevNumber + currentNumber;
    currentNumber = cache;
    num--;
  }

  return currentNumber;
};

console.log(fibonacci(10));

const fibonacciRec = (num) => {
  if (num <= 1) {
    return 1;
  }

  return fibonacciRec(num - 1) + fibonacciRec(num - 2);
};

console.log("rec", fibonacciRec(9));
// 1 1 2 3 5 8 13 21 34
