(function () {
  let container = document.querySelector(`.main_container`);

  let goToGallery = (evt) => {
    let target = evt.target;
    if (target.className !== `` && target.textContent !== ``) {
      let gallery = target.className;
      let galleryTitle = target.textContent;
      let id = 0;
      window.picture.showPic(gallery, galleryTitle, id);
    }
  };

  window.gallery = {
    chooseGallery: () => {
      let menu = container.querySelectorAll(`.sample_menu div`);
      let menuSml = container.querySelectorAll(`.sample_menu_sml div`);
      [].forEach.call(menu, function (item) {
        item.addEventListener(`click`, goToGallery);
      });
      [].forEach.call(menuSml, function (item) {
        item.addEventListener(`click`, goToGallery);
      });
    },
  };
})();
