let set1 = [
  `janmar/01.JPG`,
  `janmar/02.JPG`,
  `janmar/03.JPG`,
  `janmar/04.JPG`,
  `janmar/05.JPG`,
  `janmar/06.JPG`,
  `janmar/07.JPG`,
  `janmar/08.JPG`,
  `janmar/09.JPG`,
  `janmar/010.JPG`,
  `janmar/011.JPG`,
  `janmar/012.JPG`,
  `janmar/013.JPG`,
  `janmar/014.JPG`,
  `janmar/015.JPG`,
  `janmar/016.JPG`,
  `janmar/017.JPG`
];

let set2 = [
  `ventpola/01-pola.jpg`,
  `ventpola/02-pola.jpg`,
  `ventpola/03-pola.jpg`,
  `ventpola/04-pola.jpg`,
  `ventpola/05-pola.jpg`,
  `ventpola/06-pola.jpg`,
  `ventpola/07-pola.jpg`,
  `ventpola/08-pola.jpg`,
  `ventpola/09-pola.jpg`,
  `ventpola/010-pola.jpg`,
  `ventpola/011-pola.jpg`,
  `ventpola/012-pola.jpg`,
  `ventpola/013-pola.jpg`,
  `ventpola/014-pola.jpg`,
  `ventpola/015-pola.jpg`,
  `ventpola/016-pola.jpg`,
  `ventpola/017-pola.jpg`,
  `ventpola/018-pola.jpg`,
  `ventpola/019-pola.jpg`,
  `ventpola/020-pola.jpg`
];

let set3 = [
  `panorama/01.JPG`,
  `panorama/02.JPG`,
  `panorama/03.JPG`,
  `panorama/04.JPG`,
  `panorama/05.JPG`,
  `panorama/06.JPG`,
  `panorama/07.JPG`,
  `panorama/08.JPG`,
  `panorama/09.JPG`,
  `panorama/010.JPG`,
  `panorama/011.JPG`,
  `panorama/012.JPG`,
  `panorama/013.JPG`,
  `panorama/014.JPG`,
  `panorama/015.JPG`,
  `panorama/016.JPG`,
  `panorama/017.JPG`,
  `panorama/018.JPG`,
];

// let classToTitle = {
//   set1: `Jan - Mar 2011`,
//   set2: `Ventspils in Pola`,
//   set3: `Life in Panorama`
// };


let container = document.querySelector(`.container`);
let title = container.querySelector(`#title`);
let pic = 0;
let picCount = 1;
let photoSet;
let photoSetName;
let photoSetCount;


function activatePage(arr, titel) {
  let menuLeftSml = document.querySelector(`.menu_left_sml`);
  let imageView = container.querySelector(`.image_view`);
  let count = container.querySelector(`.count`);
  let div = document.createElement(`div`);
  let img = document.createElement(`img`);
  menuLeftSml.classList.add(`hidden`);
  img.classList.add(`imgnav`);
  imageView.textContent = ``;

  function showPic(i, t) {
    if (i === `set2`) {
      img.classList.add(`vinpola`);
    }
    pic = 0;
    picCount = 1;
    photoSet = eval(i);
    photoSetName = t;
    photoSetCount = photoSet.length;
    img.src = `img/` + photoSet[pic];
    count.textContent = ` // ` + photoSetName + ` // ` + picCount + ` of ` + photoSet.length;
  }
  showPic(arr, titel);
  // switch (arr) {
  //   case `set1`:
  //     showPic(arr, titel);
  //     break;
  //   case `set2`:
  //     showPic(arr, titel);
  //     break;
  //   case `set3`:
  //     showPic(arr, titel);
  //     break;
  // }

  div.appendChild(img);
  div.classList.add(`image`);
  container.querySelector(`.image_view`).appendChild(div);

  title.removeEventListener(`click`, activatePage);
  container.addEventListener(`click`, changePic);
  container.addEventListener(`mousemove`, showArrows);
}

function showArrows(evt) {
  let img = document.querySelector(`img`);
  let width = img.clientWidth;
  let coordX = evt.offsetX || evt.originalEvent.layerX;
  if (coordX < width / 2) {
    document.querySelector(`.image`).style.cursor = `url('img/arrows/arrowleft.png'), auto`;
  }
  if (coordX > width / 2) {
    document.querySelector(`.image`).style.cursor = `url('img/arrows/arrowright.png'), auto`;
  }
}

function changePic(evt) {
  let target = evt.target;
  let img = document.querySelector(`img`);
  let width = img.clientWidth;
  let coordX = evt.offsetX || evt.originalEvent.layerX;
  let count = container.querySelector(`.count`);
  if (coordX > width / 2 && target.classList.contains(`imgnav`)) {
    pic++;
    picCount++;
    if (pic === photoSet.length) {
      pic = 0;
      picCount = 1;
      img.src = `img/` + photoSet[pic];
      count.textContent = ` // ` + photoSetName + ` // ` + picCount + ` of ` + photoSetCount;
    } else {
      img.src = `img/` + photoSet[pic];
      count.textContent = ` // ` + photoSetName + ` // ` + picCount + ` of ` + photoSetCount;
    }
  }
  if (coordX < width / 2 && target.classList.contains(`imgnav`)) {
    pic--;
    picCount--;
    if (pic < 0) {
      pic = photoSet.length - 1;
      picCount = photoSet.length - 1;
      img.src = `img/` + photoSet[pic];
      count.textContent = ` // ` + photoSetName + ` // ` + picCount + ` of ` + photoSetCount;
    } else {
      img.src = `img/` + photoSet[pic];
      count.textContent = ` // ` + photoSetName + ` // ` + picCount + ` of ` + photoSetCount;
    }
  }
}

function goToGallery(evt) {
  let target = evt.target;
  if (target.className) {
    let gallery = target.className;
    let galleryTitle = target.textContent;
    console.log(galleryTitle);
    activatePage(gallery, galleryTitle);
  }
}

function chooseGallery() {
  let menuLeft = document.querySelector(`.menu_left`);
  let menuLeftSml = document.querySelector(`.menu_left_sml`);
  menuLeftSml.addEventListener(`click`, goToGallery);
  menuLeft.addEventListener(`click`, goToGallery);
}

function showMenu() {
  container.removeChild(title);
  let element = document.querySelector(`template`).content.querySelector(`.menu`).cloneNode(true);
  container.appendChild(element);
  let menu = document.querySelector(`.icon`);
  menu.addEventListener(`click`, function () {
    let menuLeftSml = document.querySelector(`.menu_left_sml`);
    menuLeftSml.classList.toggle(`hidden`);
  });
  chooseGallery();
}

title.addEventListener(`click`, showMenu);
