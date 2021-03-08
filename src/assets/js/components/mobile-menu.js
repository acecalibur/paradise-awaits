export default class MobileMenu {
  constructor() {
    this.menuIcon = document.querySelector('.navbar__menu-icon');
    this.links = document.querySelectorAll('.navbar__list a');
    this.body = document.querySelector('body');
    this.events();
  }

  events() {
    this.menuIcon.addEventListener('click', () => this.toggleMenu());
    this.links.forEach((el) => {
      el.addEventListener('click', () => this.toggleMenu());
    });
  }

  toggleMenu() {
    this.body.classList.toggle('drawer');
  }
}
