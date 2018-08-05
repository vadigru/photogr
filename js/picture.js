(function () {
  let container = document.querySelector(`.main_container`);

  window.pic;
  window.picCount;
  window.photoSet;
  window.photoSetName;
  window.photoSetCount;
  window.photoSetClass;

  window.picture = {
    changePic: (evt) => {
      let target = evt.target;
      let imageFlip = container.querySelector(`.image_flip`);
      let width = imageFlip.clientWidth;
      let halfWidth = width / 2;
      let coordX = evt.offsetX;
      let imageCount = container.querySelector(`.sample_count`);
      let widthA = halfWidth + window.constant.THUMB_AREA;
      let widthB = halfWidth - window.constant.THUMB_AREA;
      if (coordX > widthA && target.classList.contains(`image_flip`)) {
        window.pic++;
        window.picCount++;
        if (window.pic === window.photoSetCount) {
          window.pic = 0;
          window.picCount = 1;
          imageFlip.src = `img/` + window.photoSet[window.pic];
          imageCount.textContent = ` // ` + `"` + window.photoSetName + `"` + ` // ` + window.picCount + ` of ` + window.photoSetCount;
        } else {
          imageFlip.src = `img/` + window.photoSet[window.pic];
          imageCount.textContent = ` // ` + `"` + window.photoSetName + `"` + ` // ` + window.picCount + ` of ` + window.photoSetCount;
        }
      } else if (coordX < widthB && target.classList.contains(`image_flip`)) {
        window.pic--;
        window.picCount--;
        if (window.pic < 0) {
          window.pic = window.photoSetCount - 1;
          window.picCount = window.photoSetCount;
          imageFlip.src = `img/` + window.photoSet[window.pic];
          imageCount.textContent = ` // ` + `"` + window.photoSetName + `"` + ` // ` + window.picCount + ` of ` + window.photoSetCount;
        } else {
          imageFlip.src = `img/` + window.photoSet[window.pic];
          imageCount.textContent = ` // ` + `"` + window.photoSetName + `"` + ` // ` + window.picCount + ` of ` + window.photoSetCount;
        }
      } else if (coordX !== widthA && coordX !== widthB && target.classList.contains(`image_flip`)) {
        window.thumb.showThumbnails(window.photoSet);
      }
    },
    showPic: (arr, titel, id) => {
      let imageView = container.querySelector(`.sample_image`);
      let imageCount = container.querySelector(`.sample_count`);
      imageView.textContent = ``;
      let img = document.createElement(`img`);
      let div = document.createElement(`div`);
      if (arr === `set2`) {
        img.classList.add(`image_pola`);
      }
      if (arr === `set4`) {
        img.classList.add(`image_limited`);
      }
      window.pic = parseInt(id, 10);
      window.picCount = parseInt(id, 10) + 1;
      window.photoSet = eval(arr);
      window.photoSetName = titel;
      window.photoSetCount = window.photoSet.length;
      window.photoSetClass = arr;
      img.classList.add(`image_flip`);
      img.src = `img/` + window.photoSet[window.pic];
      img.alt = window.photoSetName;
      imageCount.textContent = ` // ` + `"` + window.photoSetName + `"` + ` // ` + window.picCount + ` of ` + window.photoSetCount;
      div.appendChild(img);
      div.classList.add(`image`);
      container.querySelector(`.sample_image`).appendChild(div);
      let imgs = container.querySelector(`img`);
      imgs.addEventListener(`click`, window.picture.changePic);
      imgs.addEventListener(`mousemove`, window.arrows.showArrows);
    },
    selectPic: (evt) => {
      let target = evt.target;
      if (target.classList.contains(window.photoSetClass)) {
        renderPic(target.className, target.alt, target.id);
      }
    }
  };

  function renderPic(p, t, id) {
    let imageView = container.querySelector(`.sample_image`);
    imageView.removeChild(container.querySelector(`.thumbnails`));
    window.picture.showPic(p, t, id);
  }


})();
