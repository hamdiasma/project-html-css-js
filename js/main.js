// select fa-gerar spin
let myGear = document.getElementById("fa-gear");
myGear.onclick = function () {
  //toogle on self
  this.classList.toggle("fa-spin");
  document.getElementById("setting-box").classList.toggle("open");
};

// switch colors
const colorsLi = document.querySelectorAll(".color-list li");

colorsLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    // set color in root

    document.documentElement.style.setProperty(
      "--main--color",
      e.target.dataset.color
    );
  });
});
// console.log(colorsLi)

// select landing page element
let landingPage = document.getElementById("landing-page");
// array of images
let arrayImages = ["06.jpg", "07.jpg", "08.jpg"];

setInterval(() => {
  // get random number of arrayImages
  let myNumb = Math.floor(Math.random() * arrayImages.length);
  // change bckground url
  //   landingPage.style.backgroundImage = `url("../assets/${arrayImages[myNumb]}")`;
}, 1000);
