import { debounce, throttle } from 'lodash';

class StickyHeader {
  constructor() {
    this.siteHeader = document.querySelector('.site-header');
    this.pageSections = document.querySelectorAll('.page-section');
    this.browserHeight = window.innerHeight;
    this.previousScrollY = window.scrollY;
    this.events();
  }

  events() {
    window.addEventListener(
      'scroll',
      throttle(() => {
        this.runOnScroll();
      }, 100),
    );

    window.addEventListener(
      'resize',
      debounce(() => {
        this.browserHeight = window.innerHeight;
      }, 250),
    );
  }

  runOnScroll() {
    this.calcScrollDirection();

    if (window.scrollY > 180) {
      this.siteHeader.classList.add('site-header--dark');
    } else {
      this.siteHeader.classList.remove('site-header--dark');
    }

    this.pageSections.forEach((el) => {
      if (window.scrollY + window.innerHeight > el.offsetTop && window.scrollY < el.offsetTop + el.offsetHeight) {
        const scrollPercent = (el.getBoundingClientRect().y / window.innerHeight) * 100;
        if (
          (scrollPercent < 18 && scrollPercent > -0.1 && this.scrollDirection === 'down') ||
          (scrollPercent < 36 && this.scrollDirection === 'up')
        ) {
          const matchingLink = el.getAttribute('data-matching-link');
          document.querySelectorAll(`.navbar__list a:not(${matchingLink})`).forEach((el) => {
            el.classList.remove('is-current-link');
          });
          document.querySelector(matchingLink).classList.add('is-current-link');
        }
      }
    });
  }

  calcScrollDirection() {
    if (window.scrollY > this.previousScrollY) {
      this.scrollDirection = 'down';
    } else {
      this.scrollDirection = 'up';
    }
    this.previousScrollY = window.scrollY;
  }
}

export default StickyHeader;
