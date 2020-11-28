const slider = document.querySelector(".color__slider");
const dot = slider.children[0];
const html = document.querySelector("html");

slider.addEventListener("click", e => {
  e.preventDefault();
  if (dot.classList.contains("color__slider-dot--move-left")) {
    dot.classList.remove("color__slider-dot--move-left");
    document.body.style.backgroundColor = "#fff";
  } else {
    dot.classList.add("color__slider-dot--move-left");
    document.body.style.backgroundColor = "#636363";
  }
});

//color__slider-dot--move-left
