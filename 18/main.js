const timeNodes = Array.from(document.querySelectorAll("[data-time"));

const seconds = timeNodes
  .map((node) => node.dataset.time)
  .map((timeCode) => {
    const [mins, secs] = timeCode.split(":").map(parseFloat);
    return mins * 60 + secs;
  })
  .reduce((previousValue, currentValue) => previousValue + currentValue);

let secondsLeft = seconds;

const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(hours, mins, secondsLeft);

// Example

const numbers = [1, 2, 3, 4];

const result = numbers.reduce(function (accumulator, currentValue) {
  console.log({ accumulator });
  console.log({ currentValue });
  return accumulator + currentValue;
}, 10);
console.log({ result });
