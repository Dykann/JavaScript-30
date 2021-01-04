const triggers = document.querySelectorAll(".cool > li");
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

function handleEnter() {
  this.classList.add("trigger-enter");

  // setTimeout(
  //   () =>
  //     this.classList.contains("trigger-enter") &&
  //     this.classList.add("trigger-enter-active"),
  //   150
  // );

  setTimeout(() => {
    if (this.classList.contains("trigger-enter")) {
      this.classList.add("trigger-enter-active");
    }
  }, 150);

  background.classList.add("open");

  const dropdown = this.querySelector(".dropdown");
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();

  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left,
  };

  // 2 ways to update a property :
  // 1.1) Either you name the property directly after the style and add the value after the =

  background.style.width = `${coords.width}px`;
  background.style.height = `${coords.height}px`;
  background.style.transform = `translate(${coords.left}px,${coords.top}px)`;

  // 1.2) Or you use setProperty after the style
  // thus you first choose the property to update and then the value to add like ("Property","Value")

  // background.style.setProperty("width", `${coords.width}px`);
  // background.style.setProperty("height", `${coords.height}px`);
  // background.style.setProperty(
  //   "transform",
  //   `translate(${coords.left}px,${coords.top}px`
  // );
}

function handleLeave() {
  this.classList.remove("trigger-enter", "trigger-enter-active");
  background.classList.remove("open");
}

triggers.forEach((trigger) =>
  trigger.addEventListener("mouseenter", handleEnter)
);
triggers.forEach((trigger) =>
  trigger.addEventListener("mouseleave", handleLeave)
);
