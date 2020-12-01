const dogs = [
  { name: "Snickers", age: 2 },
  { name: "Hugo", age: 8 },
];

function makeGreen() {
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular

console.log("hello");

// Interpolated

console.log("Hello I am a %s string!", "💩");

// Backticks

let variable = "<3";
variable = "♥️";
console.log(`Hello I am an ${variable} string!`);

// Styled

console.log("%c I am some great text", "font-size:30px;color:green");

// warning!

console.warn("Be careful!");

// Error

console.error("Be careful!");

// Info

console.info("Crocodiles eat 3-4 persons per year");

// Testing (if true will not be displayed)

console.assert(1 + 1 === 2);
const p = document.querySelector("p");
console.assert(p.classList.contains("ouch"), "That is wrong!");

// clearing

// console.clear();

// Viewing DOM Elements

console.log(p);
console.dir(p);

// Grouping together

dogs.forEach((dog) => {
  // console.group(`${dog.name}`);
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.groupEnd(`${dog.name}`);
});

// table

console.table(dogs);

// counting

console.count("Maman");
console.count("Papa");
console.count("Maman");
console.count("Papa");
console.count("Papa");
console.count("Maman");

// timing

console.time("fetching data");
fetch("https://netflixvirus.vercel.app/api/pizzaduo")
  .then((res) => res.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  });
