export default class GalleryCarousel {
  constructor() {
    this.slides = document.querySelectorAll('.gallery__item');
    this.nextBtn = document.querySelector('.gallery__btn--next');
    this.previousBtn = document.querySelector('.gallery__btn--prev');
    this.slidePos = 0;
    this.numOfSlides = this.slides.length;
    this.events();
  }

  events() {
    this.nextBtn.addEventListener('click', () => this.handleGoForward());
    this.previousBtn.addEventListener('click', () => this.handleGoBack());
  }

  handleUpdateSlideStyles() {
    this.slides.forEach((el) => {
      console.log(el);
      el.classList.remove('gallery__item--is-visible');
      el.classList.add('gallery__item--is-hidden');
    });

    this.slides[this.slidePos].classList.add('gallery__item--is-visible');
  }

  handleGoForward() {
    if (this.slidePos === this.numOfSlides - 1) {
      this.slidePos = 0;
    } else {
      this.slidePos += 1;
    }
    this.handleUpdateSlideStyles();
  }

  handleGoBack() {
    if (this.slidePos === 0) {
      this.slidePos = this.numOfSlides - 1;
    } else {
      this.slidePos -= 1;
    }
    this.handleUpdateSlideStyles();
  }
}
