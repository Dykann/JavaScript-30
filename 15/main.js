const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || [];

function addItem(e) {
  e.preventDefault();
  const text = this.querySelector("[name=item]").value;
  const item = {
    text: text,
    done: false,
  };
  items.push(item);
  updateHTML();
  localStorage.setItem("items", JSON.stringify(items));
  this.reset();
}

function updateHTML() {
  itemsList.innerHTML = items
    .map((item, i) => {
      return `
    <li>
      <input type="checkbox" data-index=${i} id="item${i}" ${
        item.done ? "checked" : ""
      }/> 
      <label for="item${i}">${item.text}</label>
    </li>
    `;
    })
    .join("");
}

function toggleDone(e) {
  if (!e.target.matches("input")) return;
  const elIndex = e.target.dataset.index;
  items[elIndex].done = !items[elIndex].done;
  localStorage.setItem("items", JSON.stringify(items));
  updateHTML(items, itemsList);
}

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);

updateHTML(items, itemsList);
