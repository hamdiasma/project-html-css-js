//onclick toggle setting-box
let gearSeting = document.getElementById("fa-gear");
gearSeting.onclick = function () {
  this.classList.toggle("fa-spin");
  document.getElementById("setting-box").classList.toggle("open");
};

// switch color

const clorLi = document.querySelectorAll(".color-list li");
console.log(clorLi);
clorLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    // set color on root --main--color
   document.documentElement.style.setProperty("--main--color",e.target.dataset.color)
  });
});

// random landing back ground
let myImages = document.getElementById("landing-page");

const imagesArray = ["06.jpg", "07.jpg", "08.jpg"];

setInterval(() => {
  let randomImager = Math.floor(Math.random() * imagesArray.length);
  myImages.style.backgroundImage = `url('assets/${imagesArray[randomImager]}')`;
}, 10000);
