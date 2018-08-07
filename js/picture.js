(function () {
  let container = document.querySelector(`.main_container`);

  window.picture = {
    changePic: (evt) => {
      let target = evt.target;
      let imageFlip = container.querySelector(`.image_flip`);
      let width = imageFlip.clientWidth;
      let halfWidth = width / 2;
      let coordX = evt.offsetX;
      let widthA = halfWidth + window.constant.THUMB_AREA;
      let widthB = halfWidth - window.constant.THUMB_AREA;
      if (coordX > widthA && target.classList.contains(`image_flip`)) {
        window.constant.pic++;
        window.constant.picCount++;
        if (window.constant.pic === window.constant.photoSetCount) {
          window.constant.pic = 0;
          window.constant.picCount = 1;
          renderSrc(window.constant.photoSet, window.constant.pic);
          renderCount(window.constant.photoSetName, window.constant.picCount, window.constant.photoSetCount);
        } else {
          renderSrc(window.constant.photoSet, window.constant.pic);
          renderCount(window.constant.photoSetName, window.constant.picCount, window.constant.photoSetCount);
        }
      } else if (coordX < widthB && target.classList.contains(`image_flip`)) {
        window.constant.pic--;
        window.constant.picCount--;
        if (window.constant.pic < 0) {
          window.constant.pic = window.constant.photoSetCount - 1;
          window.constant.picCount = window.constant.photoSetCount;
          renderSrc(window.constant.photoSet, window.constant.pic);
          renderCount(window.constant.photoSetName, window.constant.picCount, window.constant.photoSetCount);
        } else {
          renderSrc(window.constant.photoSet, window.constant.pic);
          renderCount(window.constant.photoSetName, window.constant.picCount, window.constant.photoSetCount);
        }
      } else if (coordX !== widthA && coordX !== widthB && target.classList.contains(`image_flip`)) {
        window.thumb.showThumbnails(window.constant.photoSet);
      }
    },
    showPic: (arr, titel, id) => {
      let imageView = container.querySelector(`.sample_image`);
      imageView.textContent = ``;
      let img = document.createElement(`img`);
      let div = document.createElement(`div`);
      if (arr === `set2`) {
        img.classList.add(`image_pola`);
      }
      if (arr === `set4`) {
        img.classList.add(`image_limited`);
      }
      window.constant.pic = parseInt(id, 10);
      window.constant.picCount = parseInt(id, 10) + 1;
      window.constant.photoSet = eval(arr);
      window.constant.photoSetName = titel;
      window.constant.photoSetCount = window.constant.photoSet.length;
      window.constant.photoSetClass = arr;
      img.classList.add(`image_flip`);
      img.src = `img/` + window.constant.photoSet[window.constant.pic];
      img.alt = window.constant.photoSetName;
      renderCount(window.constant.photoSetName, window.constant.picCount, window.constant.photoSetCount);
      div.appendChild(img);
      div.classList.add(`image`);
      container.querySelector(`.sample_image`).appendChild(div);
      let imgs = container.querySelector(`img`);
      imgs.addEventListener(`click`, window.picture.changePic);
      imgs.addEventListener(`mousemove`, window.arrows.showArrows);
    },
    selectPic: (evt) => {
      let target = evt.target;
      if (target.classList.contains(window.constant.photoSetClass)) {
        renderPic(target.className, target.alt, target.id);
      }
    }
  };

  let renderPic = (p, t, id) => {
    let imageView = container.querySelector(`.sample_image`);
    imageView.removeChild(container.querySelector(`.thumbnails`));
    window.picture.showPic(p, t, id);
  };

  let renderCount = (photoSetName, picCount, photoSetCount) => {
    let imageCount = container.querySelector(`.sample_count`);
    imageCount.textContent = ` // ` + `"` + photoSetName + `"` + ` // ` + picCount + ` of ` + photoSetCount;
    return imageCount.textContent;
  };

  let renderSrc = (photoSet, pic) => {
    let imageFlip = container.querySelector(`.image_flip`);
    imageFlip.src = `img/` + photoSet[pic];
    return imageFlip.src;
  };

})();
