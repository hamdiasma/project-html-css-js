// toogle gear spin
const myGear = document.getElementById("fa-gear");
myGear.addEventListener("click", () => {
  myGear.classList.toggle("fa-spin");
  //toogle settung Box (open)
  document.querySelector(".setting-box").classList.toggle("open");
});
// select landing page
const landngPage = document.getElementById("landing-page");
// get array of images

const myImageArray = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
  "06.jpg",
  "07.jpg",
  "08.jpg",
];
setInterval(() => {
  let randomImage = Math.floor(Math.random() * myImageArray.length);
  landngPage.style.backgroundImage = `url('assets/${myImageArray[randomImage]}')`;
}, 10000);
