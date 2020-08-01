export let select = function () {
  let selectHeader = document.querySelectorAll(".select__header");
  let selectItem = document.querySelectorAll(".select__item");

  selectHeader.forEach((item) => {
    item.addEventListener("click", selectToggle);
  });
  selectItem.forEach((item) => {
    item.addEventListener("click", selectChoose);
  });

  function selectToggle() {
    this.parentElement.classList.toggle("isActive");
  }

  function selectChoose() {
    let text = this.innerText;
    let closeSelect = this.closest(".select");
    let cuurentText = closeSelect.querySelector(".select__current");
    cuurentText.innerText = text;
    closeSelect.classList.remove("isActive");
  }
};
