(function () {
  let container = document.querySelector(`.main_container`);
  let title = container.querySelector(`#main_title`);
  let min = window.quote.length - window.quote.length;
  let max = window.quote.length - 1;
  let getRandomQuote = () => {
    let quoteNum = Math.floor(Math.random() * (max - min)) + min;
    return quoteNum;
  };
  let showMenu = () => {
    let template = document.querySelector(`template`);
    let element = template.content.querySelector(`.sample`).cloneNode(true);
    container.removeChild(title);
    container.appendChild(element);
    let randomQuote = getRandomQuote(min, max);
    let quote = document.querySelector(`.quote`);
    let quoteName = document.querySelector(`.quote_name`);
    quote.textContent = `«` + window.quote[randomQuote].quote + `»`;
    quoteName.textContent = `~ ` + window.quote[randomQuote].name;

    let btn = container.querySelector(`.menu_btn`);
    let btnSml = container.querySelector(`.menu_btn_sml`);
    let menu = container.querySelector(`.sample_menu`);
    let menuSml = container.querySelector(`.sample_menu_sml`);
    let front = container.querySelector(`.menu_btn_front`);
    let back = container.querySelector(`.menu_btn_back`);
    let frontSml = container.querySelector(`.menu_btn_sml_front`);
    let backSml = container.querySelector(`.menu_btn_sml_back`);

    // menu.classList.add(`sample_menu_active`);

    function menuToggle() {
      menu.classList.toggle(`sample_menu_active`);
      front.classList.toggle(`menu_btn_front_r`);
      back.classList.toggle(`menu_btn_back_r`);
    }

    function menuSmlToggle() {
      menuSml.classList.toggle(`sample_menu_sml_active`);
      frontSml.classList.toggle(`menu_btn_sml_front_r`);
      backSml.classList.toggle(`menu_btn_sml_back_r`);
    }

    btn.addEventListener(`click`, menuToggle);
    btnSml.addEventListener(`click`, menuSmlToggle);
    menuSml.addEventListener(`click`, menuSmlToggle);

    window.gallery.chooseGallery();
  };

  title.addEventListener(`click`, showMenu);

})();
