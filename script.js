let photos = [
  `01.JPG`,
  `02.JPG`,
  `03.JPG`,
  `04.JPG`,
  `05.JPG`,
  `06.JPG`,
  `07.JPG`,
  `08.JPG`,
  `09.JPG`,
  `010.JPG`,
  `011.JPG`,
  `012.JPG`,
  `013.JPG`,
  `014.JPG`,
  `015.JPG`,
  `016.JPG`,
  `017.JPG`,
];


let container = document.querySelector(`.container`);
let title = document.querySelector(`#title`);
let pic = 0;

function activate() {
  container.removeChild(title);
  let div = document.createElement(`div`);
  let p1 = document.createElement(`p`);
  let p2 = document.createElement(`p`);
  let img = document.createElement(`img`);
  div.classList.add(`.image_container`);
  p1.textContent = `Prev`;
  p1.classList.add(`prev`);
  p2.textContent = `Next`;
  p2.classList.add(`next`);
  img.src = `img/` + photos[pic];
  img.classList.add(`image`);
  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(img);
  container.appendChild(div);

  title.removeEventListener(`click`, activate);
  container.addEventListener(`click`, navigatePic);
  container.addEventListener(`mousemove`, setArrows);
}

function setArrows(evt) {
  let doc = document.querySelector(`.container`);
  let width = doc.clientWidth;

  if (evt.clientX < width / 2) {
    document.querySelector(`img`).style.cursor = "url('img/prev.cur'), auto";
  }

  if (evt.clientX > width / 2) {
    document.querySelector(`img`).style.cursor = "url('img/next.cur'), auto";
  }
}

function navigatePic(evt) {
  let img = document.querySelector(`.image`);
  let doc = document.querySelector(`.container`);
  let width = doc.clientWidth;
  let target = evt.target;

  if (evt.clientX > width / 2 && target.classList.contains(`image`) || target.classList.contains(`next`)) {
    pic++;
    if (pic === photos.length) {
      pic = 0;
      img.src = `img/` + photos[pic];
    } else {
      img.src = `img/` + photos[pic];
    }
  }

  if (evt.clientX < width / 2 && target.classList.contains(`image`) || target.classList.contains(`prev`)) {
    pic--;
    if (pic < 0) {
      pic = photos.length - 1;
      img.src = `img/` + photos[pic];
    } else {
      img.src = `img/` + photos[pic];
    }
  }
}

title.addEventListener(`click`, activate);

