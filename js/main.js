






// random landing back ground
let myImages = document.getElementById("landing-page");

const imagesArray = ["06.jpg", "07.jpg", "08.jpg"];

setInterval(() => {
  let randomImager = Math.floor(Math.random() * imagesArray.length);
myImages.style.backgroundImage=`url('assets/${imagesArray[randomImager]}')`
}, 1000);


