(function () {
  window.thumb = {
    showThumbnails: (arr) => {
      let container = document.querySelector(`.main_container`);
      let imageView = container.querySelector(`.sample_image`);
      let image = container.querySelector(`.image`);
      let imageCount = container.querySelector(`.sample_count`);
      imageView.removeEventListener(`click`, window.picture.changePic);
      imageView.removeEventListener(`mousemove`, window.showArrows);
      imageView.removeChild(image);
      if (window.constant.photoSetCount === 1) {
        imageCount.textContent = ` // ` + window.constant.photoSetCount + ` image of ` + `"` + window.constant.photoSetName + `"`;
      } else {
        imageCount.textContent = ` // All ` + window.constant.photoSetCount + ` images of ` + `"` + window.constant.photoSetName + `"`;
      }

      let thumbs = document.createElement(`div`);
      thumbs.classList.add(`thumbnails`);
      arr.forEach(function (item, i) {
        let thumb = document.createElement(`div`);
        thumb.classList.add(`thumbnail`);
        let img = document.createElement(`img`);
        img.classList.add(window.constant.photoSetClass);
        img.src = `img/` + item;
        img.alt = window.constant.photoSetName;
        img.id = i;
        thumb.appendChild(img);
        thumbs.appendChild(thumb);
      });
      imageView.appendChild(thumbs);

      let thumb = container.querySelectorAll(`.thumbnails img`);
      [].forEach.call(thumb, function (item) {
        item.addEventListener(`mouseover`, function () {
          item.style.cursor = window.constant.CURSOR_PIC_SELECT;
        });
      });
      let thumbnails = container.querySelector(`.thumbnails`);
      thumbnails.addEventListener(`click`, window.picture.selectPic);
    }
  };
})();
