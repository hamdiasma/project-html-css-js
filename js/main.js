// chek active linke
// let myPage = localStorage.getItem("my-page");

// on  chek the local storage color

let storeColor = localStorage.getItem("saving-color");

if (storeColor !== null) {
  document.documentElement.style.setProperty("--main--color", storeColor);

  // chek for active class
  // remove all active class from all children
  document.querySelectorAll(".color-list li").forEach((element) => {
    element.classList.remove("active");
    if (element.dataset.color === storeColor) {
      //add active classe on elemnet  data-color === local storage
      element.classList.add("active");
    }
  });
}

// // page active
// const localPage = document.querySelectorAll(".page li");
// localPage.forEach((li) => {
//   li.addEventListener("click", (e) => {
//     e.target.classList.remove("active")
//   });
// });

//onclick toggle setting-box
let gearSeting = document.getElementById("fa-gear");
gearSeting.onclick = function () {
  this.classList.toggle("fa-spin");
  document.getElementById("setting-box").classList.toggle("open");
};

// switch  background random
const randomBackgroundElement = document.querySelectorAll(".option-box button");
randomBackgroundElement.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.target.parentElement.querySelectorAll(".active")
    .forEach(element=>{
      element.classList.remove("active")
    });
    e.target.classList.add("active")
  });
});
// switch color

const clorLi = document.querySelectorAll(".color-list li");

clorLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    // set color on root --main--color
    document.documentElement.style.setProperty(
      "--main--color",
      e.target.dataset.color
    );
    // set color on local storage
    localStorage.setItem("saving-color", e.target.dataset.color);
    // remove all active class from all children
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });
    // add active to element clicked
    e.target.classList.add("active");
  });
});

// random landing back ground
let myImages = document.getElementById("landing-page");

const imagesArray = ["06.jpg", "07.jpg", "08.jpg"];

setInterval(() => {
  let randomImager = Math.floor(Math.random() * imagesArray.length);
  myImages.style.backgroundImage = `url('assets/${imagesArray[randomImager]}')`;
}, 10000);
