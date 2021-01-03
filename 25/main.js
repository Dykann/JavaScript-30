const divs = document.querySelectorAll("div");
const btn = document.querySelector("button");

function logText(e) {
  console.log(this.classList.value);
  e.stopPropagation();
}

divs.forEach((div) =>
  div.addEventListener("click", logText, {
    // By default it's set to false and the function will run on the way up (from the bottom to the top)
    // If set to true the function will run on the way down (from the top to the bottom)
    capture: false,
  })
);

btn.addEventListener(
  "click",
  function () {
    document.body.style.backgroundColor = "black";
  },
  {
    once: true,
  }
);
