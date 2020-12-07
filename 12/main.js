const pressed = [];
const secretCode = "maman";

window.addEventListener("keyup", (e) => {
  console.log(e.key);
  pressed.push(e.key);

  //* pressed.splice(0, pressed.length - secretCode.length);
  // if (pressed.length > secretCode.length) pressed.splice(0, 1);
  if (pressed.length > secretCode.length) pressed.shift();

  if (pressed.join("").includes(secretCode)) {
    console.log("DING DONG!");
    cornify_add();
  }
  console.log(pressed);
});

// Urgent!

//* pushing a new item when there are already 5 items in the array, it'll add 6 items in total to the pressed.length
//*  which is why pressed.length - secretCode.length : 6-5 = 1 and so delete one item at the index 0 (the first item)
