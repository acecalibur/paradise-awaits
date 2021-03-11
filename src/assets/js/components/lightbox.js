import facebookIcon from '../../images/icons/facebook.svg';
import instagramIcon from '../../images/icons/instagram.svg';
import mailIcon from '../../images/icons/mail.svg';
import twitterIcon from '../../images/icons/twitter.svg';
import youTubeIcon from '../../images/icons/youTube.svg';

class Lightbox {
  constructor() {
    this.injectHtml();
    this.lightbox = document.querySelector('.lightbox');
    this.openLightboxButtons = document.querySelectorAll('.open-lightbox');
    this.closeLightBox = document.querySelector('.lightbox__close');
    this.events();
  }

  events() {
    this.openLightboxButtons.forEach((el) => {
      el.addEventListener('click', (e) => this.openLightbox(e));
    });

    this.closeLightBox.addEventListener('click', () => this.closeLightbox());
    document.body.addEventListener('keyup', (e) => this.handleEscKeyPress(e));
  }

  injectHtml() {
    document.body.insertAdjacentHTML(
      'beforeend',
      `<div class="lightbox">
        <div class="lightbox__inner">
          <h2 class="section-title section-title--blue section-title--mb-small">
            <img src=${mailIcon} class="section-title__icon" /> Get in <strong>Touch</strong>
          </h2>
          <div class="container container--narrow">
            <p class="lightbox__description">
              We will have an online travel booking system in place soon. <br />Until then, feel free to connect with us
              on any of the below platforms!
            </p>
          </div>
          <div class="social-icons">
            <a href="#" class="social-icons__icon"><img src=${facebookIcon} alt="Facebook" /></a>
            <a href="#" class="social-icons__icon"><img src=${twitterIcon} alt="Twitter" /></a>
            <a href="#" class="social-icons__icon"><img src=${instagramIcon} alt="Instagram" /></a>
            <a href="#" class="social-icons__icon"><img src=${youTubeIcon} alt="YouTube" /></a>
          </div>
        </div>
        <div class="lightbox__close">X</div>
      </div>`,
    );
  }

  openLightbox(e) {
    e.preventDefault();
    this.lightbox.classList.add('lightbox--is-visible');
  }

  closeLightbox() {
    this.lightbox.classList.remove('lightbox--is-visible');
  }

  handleEscKeyPress(e) {
    if (e.keyCode === 27) {
      this.closeLightbox();
    }
  }
}

export default Lightbox;
