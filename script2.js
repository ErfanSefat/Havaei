const slide = document.createElement("div");
slide.className = "slide";
const slidetitle = document.createElement("div");
slidetitle.className = "slide-title";
const car = document.querySelector(".carousel");
let i = 0;
loadItems(i);
async function loadData() {
  const items = await fetch("./slides.json");
  const data = items.json();
  return data;
}
async function loadItems(i) {
  const items = await loadData();
  const slidearr = items.slides;
  const duplislide = slide.cloneNode(true);
  const duplislidetitle = slidetitle.cloneNode(true);
  duplislide.style.backgroundImage = `URL("${slidearr[i].url}")`;
  duplislidetitle.innerHTML = `${slidearr[i].head}`;
  duplislide.appendChild(duplislidetitle);
  car.appendChild(duplislide);
  //   items.slides.forEach((item) => {
  //     const duplislide = slide.cloneNode(true);
  //     const duplislidetitle = slidetitle.cloneNode(true);
  //     duplislide.style.backgroundImage = `URL("${item.url}")`;
  //     duplislidetitle.innerHTML = `${item.head}`;
  //     duplislide.appendChild(duplislidetitle);
  //     car.appendChild(duplislide);
  //   });
}
function next() {
  if (i < 1) {
    i++;
    const s = document.querySelector(".slide");
    s.remove();
    loadItems(i);
  }
}
function prev() {
  if (i > 0) {
    i--;
    const s = document.querySelector(".slide");
    s.remove();
    loadItems(i);
  }
}
