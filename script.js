// const navToggle = document.getElementById("nav-toggle");
// const menu = document.querySelector(".menu"); // Select menu container
// const menuItems = document.querySelectorAll(".menu .nav-links p"); // Select all <p> elements

// // Create GSAP Timeline (paused by default)
// const tl = gsap.timeline({ paused: true });

// // Animate opacity from 0 to 1 with stagger effect
// tl.to(menuItems, {
//   opacity: 1,
//   y: 0, // Moves back to original position
//   duration: 0.6,
//   stagger: 0.1, // Delays each item slightly
//   ease: "power2.out",
// });

// navToggle.addEventListener("click", () => {
//   menu.classList.toggle("active");

//   if (menu.classList.contains("active")) {
//     tl.play(); // Play animation when menu is opened
//   } else {
//     tl.reverse(); // Reverse animation when menu is closed
//   }
// });

const navToggle = document.getElementById("nav-toggle");
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu .nav-links p");

// GSAP Timeline (paused initially)
const tl = gsap.timeline({ paused: true });

tl.fromTo(
  menuItems,
  { opacity: 0, y: 20 }, // Start position
  { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" } // End position
);

navToggle.addEventListener("click", () => {
  menu.classList.toggle("active");

  if (menu.classList.contains("active")) {
    tl.restart(); // Always start animation from the beginning
  } else {
    tl.reverse(); // Reverse animation when closing
  }
});
// const navToggle = document.getElementById("nav-toggle");
// const menu = document.querySelector(".menu"); // Selects the first element with class 'menu'

// navToggle.addEventListener("click", () => {
//   menu.classList.toggle("active"); // Toggles the 'active' class on the menu
// });

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".image-slider img");
  const pagination = document.querySelector(".pagination"); // Ensure only one pagination is used
  const dots = pagination.querySelectorAll(".dot");
  let currentIndex = 0;
  let interval;

  function changeSlide(index = null) {
    images[currentIndex].classList.remove("active");
    dots[currentIndex].classList.remove("active");

    currentIndex = index !== null ? index : (currentIndex + 1) % images.length;

    images[currentIndex].classList.add("active");
    dots[currentIndex].classList.add("active");
  }

  function startAutoSlide() {
    interval = setInterval(() => changeSlide(), 3000);
  }
  startAutoSlide();

  dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      clearInterval(interval);
      changeSlide(index);
      startAutoSlide();
    });
  });
});

let navh2 = document.querySelectorAll(
  ".nav .nav-container #nav-part1 div p  , #nav-part2 button , #nav-toggle , .cart1 , .cart2 , .cart3  , .insta-redirection p , button"
);
// let navh2 = document.querySelectorAll(
//   "#nav-part2 button , #nav-part1 div p , #nav-toggle"
// );
// console.log(navh2);
navh2.forEach(function (elem) {
  // console.log(elem);
  elem.addEventListener("mouseenter", function () {
    // console.log(elem, "enter");

    elem.style.color = "#95c11e";
    elem.style.transition = "transform 0.3s ease-out";

    gsap.to("#cursor", {
      scale: 3.3,
      backgroundColor: "transparent",
      border: "0.3px solid white",
      duration: 0.4,
    });
  });
  elem.addEventListener("mouseleave", function () {
    elem.style.transition = "transform 0.3s ease-out";
    elem.style.color = "white";
    // console.log(elem, "leave");
    gsap.to("#cursor", {
      scale: 1,
      backgroundColor: " #95c11e",
      border: "",
      duration: 0.4,
    });
  });
});

let footerh2 = document.querySelectorAll(
  ".footer-main-container div h2,.footer-main-container div #thirdp , .footer-main-container .icon i  "
);
// console.log(footerh2);

footerh2.forEach(function (elem) {
  // console.log(elem);
  elem.addEventListener("mouseenter", function () {
    // console.log(elem, "enter");
    elem.style.color = "white";
    gsap.to("#cursor", {
      scale: 3.3,
      backgroundColor: "transparent",
      border: "0.3px solid white",
      duration: 0.4,
    });
  });
  elem.addEventListener("mouseleave", function () {
    // console.log(elem, "leave");
    elem.style.color = "black";
    gsap.to("#cursor", {
      scale: 1,
      backgroundColor: " #95c11e",
      border: "",
      duration: 0.4,
    });
  });
});

let footericon = document.querySelectorAll(
  "footer .footer-main-container div img "
);
// console.log(footerh2);

footericon.forEach(function (elem) {
  // console.log(elem);
  elem.addEventListener("mouseenter", function () {
    // console.log(elem, "enter");
    gsap.to(footericon, {
      scale: 0.9,
      duration: 0.2,
    });
    gsap.to("#cursor", {
      scale: 3.3,
      backgroundColor: "transparent",
      border: "0.3px solid white",
      // x: dets.x + 500 + "px",
      // y: dets.y,
      duration: 0.4,
    });
  });
  elem.addEventListener("mouseleave", function () {
    // console.log(elem, "leave");
    gsap.to(footericon, {
      scale: 1,
      duration: 0.4,
    });
    gsap.to("#cursor", {
      scale: 1,
      backgroundColor: " #95c11e",
      border: "",
      duration: 0.4,
    });
  });
});
let navImage = document.querySelectorAll("#nav-part1 img");
// console.log("navImage", navImage);

navImage.forEach(function (elem) {
  // console.log(elem);
  elem.addEventListener("mouseenter", function () {
    // console.log(elem, "enter");
    gsap.to(navImage, {
      scale: 0.8,
      duration: 0.2,
    });
    gsap.to("#cursor", {
      scale: 3.3,
      backgroundColor: "transparent",
      border: "0.3px solid white",
      // x: dets.x + 500 + "px",
      // y: dets.y,
      duration: 0.4,
    });
  });
  elem.addEventListener("mouseleave", function () {
    // console.log(elem, "leave");
    gsap.to(navImage, {
      scale: 1,
      duration: 0.4,
    });
    gsap.to("#cursor", {
      scale: 1,
      backgroundColor: " #95c11e",
      border: "",
      duration: 0.4,
    });
  });
});
gsap.to(".nav", {
  backgroundColor: "black",
  height: "96px",
  // duration : 1,
  scrollTrigger: {
    trigger: ".nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 2,
  },
});
// gsap.to(".main", {
//   // backgroundColor: "black",
//   backgroundColor: "yellow",
//   // height: '96px',
//   duration: 0.2,
//   // delay : 1,
//   // opacity : 0,
//   scrollTrigger: {
//     trigger: ".main",
//     scroller: "body",
//     markers: true,
//     start: "top -50%",
//     end: "top -100%",
//     scrub: 2,
//   },
// });
gsap.to(".main", {
  backgroundColor: "black",
  duration: 0.2,
  scrollTrigger: {
    trigger: ".main",
    scroller: "body",
    start: "top -0%",
    end: "top -100%",
    scrub: 2,
  },
});
gsap.from("#colon1 ", {
  duration: 0.4,
  delay: 3,
  // opacity : 0,
  x: -50,
  y: -50,
  scrollTrigger: {
    trigger: ".page4",
    scroller: "body",
    // markers: true,
    start: "top 50%",
    end: "top 68%",
    scrub: 2,
  },
});
gsap.from(" #colon2", {
  duration: 0.4,
  delay: 3,
  // opacity : 0,
  x: 50,
  y: 50,
  scrollTrigger: {
    trigger: ".page4",
    scroller: "body",
    // markers: true,
    start: "top 50%",
    end: "top 68%",
    scrub: 2,
  },
});
gsap.to(" #first", {
  duration: 0.6,
  y: -50,
  scrollTrigger: {
    trigger: ".page5",
    scroller: "body",
    // markers: true,
    start: "top 94%",
    end: "top 97%",
    scrub: 2,
  },
});

let page4 = document.querySelector(".page4");
page4.addEventListener("mousemove", function (dets) {
  // console.log(dets);
  if (dets.x < 500) {
    gsap.to(".page4 p", {
      duration: 2,
      x: 6,
    });
  }
  if (dets.x > 500) {
    gsap.to(".page4 p", {
      duration: 2,
      x: -6,
    });
  }
  // if (dets.y < 500) {
  //   gsap.to(".page4 p", {
  //     duration: 2,
  //     y: 12,
  //   });
  // }
  // if (dets.y > 500) {
  //   gsap.to(".page4 p", {
  //     duration: 2,
  //     y: -12,
  //   });
  // }
});
// window.addEventListener("mousemove", function (dets) {
//   // console.log(dets);
//   gsap.to("#cursor", {
//     x: dets.x - 6 + "px",
//     y: dets.y,
//     duration: 0.4,
//   });
// });
// window.addEventListener("mousemove", function (dets) {
//   // console.log(dets);
//   gsap.to("#cursor-blur", {
//     x: dets.x - 96 + "px",
//     y: dets.y - 90 + "px",
//     duration: 0.3,
//   });
// });
window.addEventListener("mousemove", function (dets) {
  // console.log(dets);
  gsap.to("#cursor", {
    x: dets.x + "px",
    y: dets.y,
    duration: 0.4,
  });
});
window.addEventListener("mousemove", function (dets) {
  // console.log(dets);
  gsap.to("#cursor-blur", {
    x: dets.x - 140 + "px",
    y: dets.y - 160 + "px",
    duration: 0.3,
  });
});
