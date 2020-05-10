// local storage color
let storeColors = localStorage.getItem("storeColor");
if (storeColors !== null) {
  // console.log(storeColors)
  document.documentElement.style.setProperty("--main--color", storeColors);
  // chek for active classe
  // remove all active classe from color list item
  document.querySelectorAll(".color-list li").forEach((elment) => {
    elment.classList.remove("active");
    // add active clasee local stprage
    if (elment.getAttribute("value") === storeColors) {
      elment.classList.add("active");
    }
  });
}
let bacgroundOption = true;
let mySetInterval;

// chek local storage back ground color
let storeImage = localStorage.getItem("storeImage");
if (storeImage !== null) {
  document.querySelectorAll(".option-box button").forEach((btn) => {
    btn.classList.remove("active");

    if (storeImage === "true") {
      bacgroundOption = true;
      document.getElementById("yes").classList.add("active");
    } else {
      bacgroundOption = false;
      document.querySelector(".option-box .no").classList.add("active");
    }
  });
}

// toogle gear spin
const myGear = document.getElementById("fa-gear");
myGear.addEventListener("click", () => {
  myGear.classList.toggle("fa-spin");
  //toogle settung Box (open)
  document.querySelector(".setting-box").classList.toggle("open");
});

// switch color
const myColorsLi = document.querySelectorAll(".color-list li");
myColorsLi.forEach((li) => {
  li.addEventListener("click", () => {
    //  console.log(li.getAttribute("value"));
    //set color on root --main--color
    document.documentElement.style.setProperty(
      "--main--color",
      li.getAttribute("value")
    );
    localStorage.setItem("storeColor", li.getAttribute("value"));
    // remove all active classe from color list
    li.parentElement.querySelectorAll(".color-list li").forEach((elment) => {
      elment.classList.remove("active");
    });
    // add clsee active to the color in root
    li.classList.add("active");
  });
});

// option-box button option on background image (on/off)

const myButtons = document.querySelectorAll(".option-box button");
/*console.log(myButton)*/

myButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // remove all active class
    btn.parentElement.querySelectorAll(".active").forEach((act) => {
      act.classList.remove("active");
    });
    btn.classList.add("active");
    if (btn.value === "yes") {
      //console.log("yes");
      bacgroundOption = true;
      // console.log(typeof(bacgroundOption));
      randomizeImages();
      localStorage.setItem("storeImage", true);
    } else {
      //console.log("no");
      bacgroundOption = false;
      clearInterval(mySetInterval);
      localStorage.setItem("storeImage", false);

      //console.log(typeof(bacgroundOption));
    }
  });
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

function randomizeImages() {
  if (bacgroundOption === true) {
    mySetInterval = setInterval(() => {
      let randomImage = Math.floor(Math.random() * myImageArray.length);
      landngPage.style.backgroundImage = `url('assets/${myImageArray[randomImage]}')`;
    }, 1000);
  }
}
randomizeImages();

//active classe to links

const myLinks = document.querySelectorAll(".page li a");
//console.log(myLinks)
myLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".page .active").forEach((act) => {
      act.classList.remove("active");
    });
    link.classList.add("active");
  });
});

// localStorage.removeItem("storeColor")
// console.log(localStorage.getItem("storeColor"))
//localStorage.removeItem("storeImage")

// select skillis-selector
let ourSkills = document.querySelector(".skills");
//console.log(ourSkills)
let ourAbout = document.querySelector(".about-us");
//console.log(ourSkills.offsetTop)
window.onscroll = function () {
  // skills offsetTop (top de skill)
  let skillisOffsetTop = ourSkills.offsetTop;
  let ourAboutTop = ourAbout.offsetTop;
  // console.log(ourAboutTop);
  // console.log(skillisOffsetTop);
  // console.log( ourAbout.offsetHeight);
  // console.log(document.body.offsetHeight)
  // console.log(document.body.offsetHeight - ourSkills.offsetHeight)
  // console.log(window.pageYOffset)
  //skills outer height ()skills
  let skillisOuterHeight = ourSkills.offsetHeight;
  // console.log(skillisOuterHeight);
  // // window height
  let windowHeight = window.innerHeight;
  let windowScrollTop = window.pageYOffset;
  // console.log(windowScrollTop);
  // console.log(windowHeight);
  // console.log(ourAboutTop);
  // console.log(skillisOuterHeight);

  // // window scroll top
  // let windowScrollTop = window.pageYOffset;
  // console.log(windowScrollTop)
  let allSkills = document.querySelectorAll(".skill-box .skill-progress span");
  if (windowScrollTop > ourAboutTop + skillisOuterHeight - windowHeight) {
    //console.log("hello hamdi");

    allSkills.forEach((prog) => {
      //prog.style.width = prog.dataset.progress la mm chose;
      prog.style.width = prog.getAttribute("value");
    });
  } else {
    allSkills.forEach((prog) => {
      prog.style.width = 0;
    });
  }
};
