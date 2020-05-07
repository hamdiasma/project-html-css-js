// on  chek the local storage

let storeColor = localStorage.getItem("saving-color");

if (storeColor !== null) {
  document.documentElement.style.setProperty("--main--color", storeColor);
}

//onclick toggle setting-box
let gearSeting = document.getElementById("fa-gear");
gearSeting.onclick = function () {
  this.classList.toggle("fa-spin");
  document.getElementById("setting-box").classList.toggle("open");
};

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
