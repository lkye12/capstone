import { header, nav, main, footer } from "./components";

import * as state from "./stores";

function render(st) {
  document.querySelector("#root").innerHTML = `
    ${header(st)}
    ${nav(state.Links)}
    ${main(st)}
    ${footer()}
    `;
  addPicOnFormSubmit();
  addNavToggle();
  addNavEventListeners();
}
render(state.home);

function addNavEventListeners() {
  document.querySelectorAll("nav a").forEach(navLink => {
    navLink.addEventListener("click", event => {
      event.preventDefault();
      render(state[event.target.textContent]);
    });
  });
}

// populating gallery with pictures
const gallerySection = document.querySelector("#gallery");
dogPictures.forEach(pic => {
  let img = document.createElement("img");
  img.src = pic.url;
  img.alt = pic.title;
  gallerySection.appendChild(img);
});

// handle form submission
document.querySelector("form").addEventListener("submit", event => {
  event.preventDefault();
  Array.from(event.target.elements).forEach(el => {
    console.log("Input Type: ", el.type);
    console.log("Name: ", el.name);
    console.log("Value: ", el.value);
  });
});

function addNavToggle() {
  // add menu toggle to bars icon in nav bar
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });
}

function addPicOnFormSubmit() {
  document.querySelector("form").addEventListener("submit", event => {
    event.preventDefault();
    let inputs = event.target.elements;
    let newPic = {
      url: inputs[0].value,
      title: inputs[1].value
    };
    state.gallery.pictures.push(newPic);
    render(state.gallery);
  });
}
