// Custom scripts

let sub = document.querySelectorAll(".sub");
let menuLink = document.querySelectorAll(".menu__link");
let menuSub = document.querySelectorAll(".submenu");
let html = document.querySelector("html");

// add class

function navMenu() {
  menuLink.forEach((link) => {
    link.addEventListener("click", (e) => {
      menuLink.forEach((el) => {
        el.classList.remove("_activeRotateArrow");
      });
      sub.forEach((subelement) => {
        let item = subelement.lastElementChild;
        subelement.addEventListener("click", () => {
          let item = subelement.lastElementChild;
          item.classList.add("_active");
          event.stopPropagation();
        });
        item.classList.remove("_active");
      });

      link.classList.add("_activeRotateArrow");
    });
  });
}
navMenu();

//burger js
let burgerMenu = document.querySelector(".menu__icon");
function burger() {
  burgerMenu.classList.toggle("_active");
  document.body.classList.toggle("_lock");
  document.querySelector(".menu__body").classList.toggle("_active");
}
burgerMenu.addEventListener("click", burger);

html.addEventListener("click", (e) => {
  if (e.target.tagName !== "HTML") {
    menuSub.forEach((click) => {
      click.classList.remove("_active");
    });
    menuLink.forEach((el) => {
      el.classList.remove("_activeRotateArrow");
    });
  }
});

//swiper
const swiper = new Swiper(".swiper__blogs", {
  // slidesPerView: 3,
  // spaceBetween: 94,
  // If we need pagination
  pagination: {
    el: ".swiper__pagination",
    type: "bullets",
    clickable: true,
  },

  //   // Responsive breakpoints
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    //   // when window width is >= 320px
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    //   // when window width is >= 480px
    1250: {
      slidesPerView: 3,
      spaceBetween: 94,
    },
  },
});


const swiperSecond = new Swiper(".swiper__partners", {
  // slidesPerView: 3,
  // spaceBetween: 94,
  // If we need pagination
 

  //   // Responsive breakpoints
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  //   //   // when window width is >= 320px
    767: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  //   //   // when window width is >= 480px
    1250: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});
