(function () {
  let container = document.querySelector(`.main_container`);
  window.arrows = {
    showArrows: (evt) => {
      let imageFlip = container.querySelector(`.image_flip`);
      let width = imageFlip.clientWidth;
      let halfWidth = width / 2;
      let coordX = evt.offsetX;
      if (coordX < halfWidth - window.constant.THUMB_AREA) {
        imageFlip.style.cursor = window.constant.CURSOR_LEFT;
      }
      if (coordX <= width && coordX >= halfWidth + window.constant.THUMB_AREA) {
        imageFlip.style.cursor = window.constant.CURSOR_RIGHT;
      }
      if (coordX <= halfWidth + window.constant.THUMB_AREA && coordX >= halfWidth - window.constant.THUMB_AREA) {
        imageFlip.style.cursor = window.constant.CURSOR_GALLERY;
      }
    }
  };
})();
