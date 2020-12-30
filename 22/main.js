const triggers = document.querySelectorAll("a");
const highlight = document.createElement("span");
highlight.classList.add("highlight");
document.body.appendChild(highlight);

function highlightLink() {
  const linkCoords = this.getBoundingClientRect();
  console.log(linkCoords);

  // 1) Either you declare each variable 1 by 1

  //   const width = linkCoords.width;
  //   const height = linkCoords.height;
  //   const top = linkCoords.top + window.scrollY;
  //   const left = linkCoords.left + window.scrollX;

  //   highlight.style.width = `${width}px`;
  //   highlight.style.height = `${height}px`;
  //   highlight.style.transform = `translate(${left}px,${top}px)`;

  //   2) Or you declare them all in an Object

  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX,
  };

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px,${coords.top}px)`;
}

triggers.forEach((a) => a.addEventListener("mouseenter", highlightLink));
