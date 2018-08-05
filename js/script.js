(function () {

  let container = document.querySelector(`.main_container`);
  let pic;
  let picCount;
  let photoSet;
  let photoSetName;
  let photoSetCount;
  let photoSetClass;
  const THUMB_AREA = 50;

  function showPic(arr, titel, id) {
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
    pic = parseInt(id, 10);
    picCount = parseInt(id, 10) + 1;
    photoSet = window.eval(arr);
    photoSetName = titel;
    photoSetCount = photoSet.length;
    photoSetClass = arr;
    img.classList.add(`image_flip`);
    img.src = `img/` + photoSet[pic];
    img.alt = photoSetName;
    imageCount.textContent = ` // ` + `"` + photoSetName + `"` + ` // ` + picCount + ` of ` + photoSetCount;
    div.appendChild(img);
    div.classList.add(`image`);
    container.querySelector(`.sample_image`).appendChild(div);
    let imgs = container.querySelector(`img`);
    imgs.addEventListener(`click`, changePic);
    imgs.addEventListener(`mousemove`, showArrows);
  }

  function showArrows(evt) {
    let imageFlip = container.querySelector(`.image_flip`);
    let width = imageFlip.clientWidth;
    let halfWidth = width / 2;
    let coordX = evt.offsetX;
    if (coordX < halfWidth - THUMB_AREA) {
      imageFlip.style.cursor = `url('img/arrows/arrowleft.png'), auto`;
    }
    if (coordX <= width && coordX >= halfWidth + THUMB_AREA) {
      imageFlip.style.cursor = `url('img/arrows/arrowright.png'), auto`;
    }

    if (coordX <= halfWidth + THUMB_AREA && coordX >= halfWidth - THUMB_AREA) {
      imageFlip.style.cursor = `url('img/arrows/gallery.png'), auto`;
    }
  }


  function showThumbnails(arr) {
    let imageView = container.querySelector(`.sample_image`);
    let image = container.querySelector(`.image`);
    let imageCount = container.querySelector(`.sample_count`);
    imageView.removeEventListener(`click`, changePic);
    imageView.removeEventListener(`mousemove`, showArrows);
    imageView.removeChild(image);
    if (photoSetCount === 1) {
      imageCount.textContent = ` // ` + photoSetCount + ` image of ` + `"` + photoSetName + `"`;
    } else {
      imageCount.textContent = ` // All ` + photoSetCount + ` images of ` + `"` + photoSetName + `"`;
    }

    let thumbs = document.createElement(`div`);
    thumbs.classList.add(`thumbnails`);
    arr.forEach(function (item, i) {
      let thumb = document.createElement(`div`);
      thumb.classList.add(`thumbnail`);
      let img = document.createElement(`img`);
      img.classList.add(photoSetClass);
      img.src = `img/` + item;
      img.alt = photoSetName;
      img.id = i;
      thumb.appendChild(img);
      thumbs.appendChild(thumb);
    });
    imageView.appendChild(thumbs);


    let thumb = container.querySelectorAll(`.thumbnails img`);
    [].forEach.call(thumb, function (item) {
      item.addEventListener(`mouseover`, function () {
        item.style.cursor = `url(img/arrows/arrowup.png), auto`;
      });
    });
    let thumbnails = container.querySelector(`.thumbnails`);
    thumbnails.addEventListener(`click`, selectPicture);
  }

  function changePic(evt) {
    let target = evt.target;
    let imageFlip = container.querySelector(`.image_flip`);
    let width = imageFlip.clientWidth;
    let halfWidth = width / 2;
    let coordX = evt.offsetX;
    let imageCount = container.querySelector(`.sample_count`);
    let widthA = halfWidth + THUMB_AREA;
    let widthB = halfWidth - THUMB_AREA;
    if (coordX > widthA && target.classList.contains(`image_flip`)) {
      pic++;
      picCount++;
      if (pic === photoSetCount) {
        pic = 0;
        picCount = 1;
        imageFlip.src = `img/` + photoSet[pic];
        imageCount.textContent = ` // ` + `"` + photoSetName + `"` + ` // ` + picCount + ` of ` + photoSetCount;
      } else {
        imageFlip.src = `img/` + photoSet[pic];
        imageCount.textContent = ` // ` + `"` + photoSetName + `"` + ` // ` + picCount + ` of ` + photoSetCount;
      }
    } else if (coordX < widthB && target.classList.contains(`image_flip`)) {
      pic--;
      picCount--;
      if (pic < 0) {
        pic = photoSetCount - 1;
        picCount = photoSetCount;
        imageFlip.src = `img/` + photoSet[pic];
        imageCount.textContent = ` // ` + `"` + photoSetName + `"` + ` // ` + picCount + ` of ` + photoSetCount;
      } else {
        imageFlip.src = `img/` + photoSet[pic];
        imageCount.textContent = ` // ` + `"` + photoSetName + `"` + ` // ` + picCount + ` of ` + photoSetCount;
      }
    } else if (coordX !== widthA && coordX !== widthB && target.classList.contains(`image_flip`)) {
      showThumbnails(photoSet);
    }
  }

  function renderPic(p, t, id) {
    let imageView = container.querySelector(`.sample_image`);
    imageView.removeChild(container.querySelector(`.thumbnails`));
    showPic(p, t, id);
  }

  function selectPicture(evt) {
    let target = evt.target;
    if (target.classList.contains(photoSetClass)) {
      renderPic(target.className, target.alt, target.id);
    }
  }

  function goToGallery(evt) {
    let target = evt.target;
    if (target.className !== `` && target.textContent !== ``) {
      let gallery = target.className;
      let galleryTitle = target.textContent;
      let id = 0;
      showPic(gallery, galleryTitle, id);
    }
  }

  window.chooseGallery = () => {
    let menu = container.querySelectorAll(`.sample_menu div`);
    let menuSml = container.querySelectorAll(`.sample_menu_sml div`);
    [].forEach.call(menu, function (item) {
      item.addEventListener(`click`, goToGallery);
    });
    [].forEach.call(menuSml, function (item) {
      item.addEventListener(`click`, goToGallery);
    });
  };

})();
