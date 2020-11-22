const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360;
  secondHand.style.transform = `rotate(${secondsDegrees + 90}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360;
  minsHand.style.transform = `rotate(${minsDegrees + 90}deg)`;

  const hours = now.getHours();
  const hourDegrees = (hours / 12) * 360;
  hourHand.style.transform = `rotate(${hourDegrees + 90}deg)`;
}

setInterval(setDate, 1000);

setDate();
