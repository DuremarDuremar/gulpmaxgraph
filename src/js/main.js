import { select } from "./select";
select();

let burger = document.querySelector(".adap__link");

burger.addEventListener("click", function (event) {
  event.preventDefault;
  //   burger.classList.toggle("_active-burger");

  document.querySelector(".burger").classList.toggle("_active__burger");
  document.querySelector(".canvas").classList.toggle("_active__burger");
});

window.onresize = function () {
  if (window.matchMedia("screen and (min-width:778px)").matches) {
    document.querySelector(".burger").classList.remove("_active__burger");
    document.querySelector(".canvas").classList.remove("_active__burger");
    burger.classList.remove("_active__burger");
  } else {
  }
};
