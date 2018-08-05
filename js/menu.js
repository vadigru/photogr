(function () {
  let container = document.querySelector(`.main_container`);
  let title = container.querySelector(`#main_title`);

  let showMenu = () => {
    let template = document.querySelector(`template`);
    let element = template.content.querySelector(`.sample`).cloneNode(true);
    container.removeChild(title);
    container.appendChild(element);
    let icon = container.querySelector(`.sample_icon`);
    icon.addEventListener(`click`, function () {
      let menuSml = container.querySelector(`.sample_menu_sml`);
      menuSml.classList.toggle(`hidden`);
    });

    let btn = container.querySelector(`.menu_btn`);
    let btnSml = container.querySelector(`.menu_btn_sml`);
    let menu = container.querySelector(`.sample_menu`);
    let menuSml = container.querySelector(`.sample_menu_sml`);
    let front = container.querySelector(`.menu_btn_front`);
    let back = container.querySelector(`.menu_btn_back`);
    let frontSml = container.querySelector(`.menu_btn_sml_front`);
    let backSml = container.querySelector(`.menu_btn_sml_back`);

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

    window.chooseGallery();
  };

  title.addEventListener(`click`, showMenu);

})();