const slidecontainer = document.querySelector(".slide-container");
const slides = document.querySelectorAll(".slide");
let j = slides.length;
let i = 0;
function next() {
  if (i <= (j - 1) * -1200) {
    i = 1200;
  }
  i -= 1200;
  slidecontainer.style.left = `${i}px`;
}
function prev() {
  if (i >= 0) {
    i = j * -1200;
  }
  i += 1200;
  slidecontainer.style.left = `${i}px`;
}
setInterval(next, 2000);