const img = document.querySelector(".business-card__img");
const container = document.querySelector(".container");
const backdrop = document.querySelector(".backdrop");

img.addEventListener("click", () => {
  backdrop.classList.add("show-backdrop");
  const urlInput = document.createElement("div");
  urlInput.classList.add("input-container");

  const children = `<input class="input" type="text" placeholder="Image URL" />
   <button class="button">Add</button>
  `;
  urlInput.innerHTML = children;
  container.appendChild(urlInput);

  const addBtn = document.querySelector(".button");
  addBtn.addEventListener("click", changeImg);
});

function changeImg() {
  const imgSrc = document.getElementsByClassName("business-card__img")[0];
  const imgVal = document.querySelector("input");
  imgSrc.setAttribute("src", imgVal.value);
  removeFormAndBdrop();
}

function removeFormAndBdrop() {
  backdrop.classList.remove("show-backdrop");
  document.querySelector(".input-container").remove();
}

backdrop.addEventListener("click", removeFormAndBdrop);
