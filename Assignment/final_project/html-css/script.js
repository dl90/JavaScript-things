/**
 * @author Don (dl90)
 */

const homepage = "/"
const beforeLink = "/bNXE0HIDrrmixWb6-before";
const afterLink = "/oTIu5mmWd4f3Hb0z-after";

const submitButton = document.querySelector(".form");
const backButton = document.querySelector(".back-button");

backButton.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.replace(homepage);
  // window.history.back();
})

submitButton.addEventListener("click", () => {
  const injector = document.querySelector(".img-container");

  const beforeImg = document.createElement('img');
  beforeImg.setAttribute('class', 'image');
  beforeImg.setAttribute('src', `"${beforeLink}"`);
  injector.appendChild(beforeImg);

  const afterImg = document.createElement('img');
  afterImg.setAttribute('class', 'image');
  afterImg.setAttribute('src', `"${afterLink}"`);
  injector.appendChild(beforeImg);
})