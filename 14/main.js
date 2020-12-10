// Reference vs Copy

// When modifying a data of an array or object you got by reference it'll also modify the first element you used for the copy
// even though you didn't target it

const fruit = ["raisin", "fraise", "banane", "kiwi"];
const fruit2 = fruit;
fruit2[0] = "pomme";
console.log(fruit);
console.log(fruit2);

// Different ways to copy an array (and not get it by reference)

const khaov = ["hew", "maman", "tod", "titi", "rene"];

// 1) Spread

const khaov1 = [...khaov];
khaov1[0] = "papa";

// 2) Array.from

// const khaov2 = Array.from(khaov);
// khaov2[0] = "papa";

// 3) Slice

// const khaov3 = khaov.slice();
// khaov3[0] = "papa";

// 4) Concat

// const khaov4 = [].concat(khaov);
// khaov4[0] = "papa";

console.log(khaov);
console.log(khaov1);

// Object, exactly the same thing is happening with if you get an object by reference, it'll change both objects
// even thought you didn't target the first one

const person = {
  name: "titi",
  age: 21,
};

const dykann = person;

dykann.name = "dykann";

console.log(person);
console.log(dykann);

// Different ways to copy an object (and not get it by reference)

const critere = "age";
const age = 21;

const titi = {
  name: "titi",
  [critere]: age,
};

// 1) Object.assign

const billy = Object.assign({}, titi, {
  name: "billy",
  age: 27,
});

// 1.1) either you update the properties of the new Object inside the Object.assign (see above)
// 1.2) or you can do it outside after assigning the new Object (see below)

// const billy = Object.assign({}, titi);
// billy.name = "billy";
// billy.age = 25;

console.log(titi);
console.log(billy);

// as you see when modifying the new Object it doesn't modify the Obj you "copied"
// and it's the same when you try to modify the original it won't modify the new Object (see below)

titi.name = "willy";
titi.age = 55;

console.log(titi);
console.log(billy);

// 2) Spread (exactly the same as we used for the array)

const mystic = {
  name: "mystic",
  age: 4,
  gender: "female",
  breed: "berger",
};

const lara = { ...mystic };

lara.name = "lara";
lara.age = 5;
lara.breed = "bichon";

console.log(mystic);
console.log(lara);

// as you see when modifying the new Object it doesn't modify the Obj you "copied"
// and it's the same when you try to modify the original it won't modify the new Object (see below)

mystic.name = "marcel";
mystic.age = 15;
mystic.gender = "male";
mystic.breed = "bichon";

console.log(mystic);
console.log(lara);
