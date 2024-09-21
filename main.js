//Recupero gli elementi
const btnLeft = document.querySelector(".left-btn");
const btnRight = document.querySelector(".right-btn");
const tabMenu = document.querySelector(".tab-menu");

//Visibilità del Menu
const IconVisibility = () => {
  let scrollLeftValue = Math.ceil(tabMenu.scrollLeft);
  //console.log('1', scrollLeftValue);
  let scrollableWidth = tabMenu.scrollWidth - tabMenu.clientWidth;
  //console.log('2', scrollableWidth);

  btnLeft.style.display = scrollLeftValue > 0 ? "block" : "none";
  btnRight.style.display = scrollableWidth > scrollLeftValue ? "block" : "none";
};

//Al click del bottone di destra
btnRight.addEventListener("click", () => {
  tabMenu.scrollLeft += 150;
  //IconVisibility();
  setTimeout(() => IconVisibility(), 50);
});

//Al click del bottone di sinistra
btnLeft.addEventListener("click", () => {
  tabMenu.scrollLeft -= 150;
  //IconVisibility();
  setTimeout(() => IconVisibility(), 50);
});

//Al caricamento
window.onload = function () {
  btnRight.style.display =
    tabMenu.scrollWidth > tabMenu.clientWidth ||
    tabMenu.scrollWidth >= window.innerWidth
      ? "block"
      : "none";
  btnLeft.style.display =
    tabMenu.scrollWidth >= window.innerWidth ? "" : "none";
};

//Resize
window.onresize = function () {
  btnRight.style.display =
    tabMenu.scrollWidth > tabMenu.clientWidth ||
    tabMenu.scrollWidth >= window.innerWidth
      ? "block"
      : "none";
  btnLeft.style.display =
    tabMenu.scrollWidth >= window.innerWidth ? "" : "none";

  let scrollLeftValue = Math.round(tabMenu.scrollLeft);
  btnLeft.style.display = scrollLeftValue > 0 ? "block" : "none";
};

//Drag
let activeDrag = false;

//Muovo il mouse
tabMenu.addEventListener("mousemove", (drag) => {
  if (!activeDrag) return;
  tabMenu.scrollLeft -= drag.movementX;
  IconVisibility();
  tabMenu.classList.add("dragging");
});

//Muovo il mouse in alto
document.addEventListener("mouseup", () => {
  activeDrag = false;
  tabMenu.classList.remove("dragging");
});

//Muovo il mouse in basso
tabMenu.addEventListener("mousedown", () => {
  activeDrag = true;
});

//Per vedere il contenuto in base a cosa clicco
const tabs = document.querySelectorAll(".tab");
const tabBtns = document.querySelectorAll(".tab-btn");

const tab_Nav = function (tabBtnClick) {
  tabBtns.forEach((tabBtn) => {
    tabBtn.classList.remove("active");
  });

  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });

  tabBtns[tabBtnClick].classList.add("active");
  tabs[tabBtnClick].classList.add("active");
};

tabBtns.forEach((tabBtn, i) => {
  tabBtn.addEventListener("click", () => {
    tab_Nav(i);
  });
});
