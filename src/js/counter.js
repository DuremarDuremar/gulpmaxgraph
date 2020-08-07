export let counter = function () {
  const btns = document.querySelectorAll(".counter__btn");

  btns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const direction = this.dataset.direction;
      const inp = this.parentElement.querySelector(".counter__value");
      const currentValue = +inp.value;
      let countVal = document.querySelectorAll(".counter__value");
      let newValue;
      let resValue = 0;
      if (direction === "plus") {
        newValue = currentValue + 1;
      } else {
        newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
      }
      inp.value = newValue;

      countVal.forEach(function (val) {
        resValue += +val.value;
      });

      let counterEnter = document.querySelector(".counter__enter");
      counterEnter.addEventListener("click", counterChoose);

      function counterChoose() {
        let text = resValue;
        let closeSelect = this.closest(".select");
        let cuurentText = closeSelect.querySelector(".select__current");
        cuurentText.innerText = text;
        closeSelect.classList.remove("isActive");
      }
    });
  });
};

counter();
