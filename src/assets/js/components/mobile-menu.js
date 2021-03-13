class MobileMenu {
  constructor() {
    this.menuIcon = document.querySelector('.navbar__menu-icon');
    this.menuList = document.querySelector('.navbar__list');
    this.links = document.querySelectorAll('.navbar__list a');
    this.events();
  }

  events() {
    this.menuIcon.addEventListener('click', () => this.toggleMenu());
    this.links.forEach((el) => {
      el.addEventListener('click', () => this.toggleMenu());
    });
  }

  toggleMenu() {
    this.menuList.classList.toggle('navbar__list--is-active');
    this.menuIcon.classList.toggle('navbar__menu-icon--is-active');
  }
}

export default MobileMenu;
