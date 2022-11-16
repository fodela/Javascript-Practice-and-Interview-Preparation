// Async Javascript

const print = (i) => {
  setTimeout(() => {
    console.log(i);
  }, 1000);
};

const printAll = (print, arr) => {
  for (let i = 0; i < arr.length; i++) {
    print(i);
  }
};

console.log(printAll(print(1), [1, 2, 3]));

print(1);
