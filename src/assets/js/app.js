import GalleryCarousel from './components/gallery-carousel';
import Lightbox from './components/lightbox';
import MobileMenu from './components/mobile-menu';
import RevealOnScroll from './components/reveal-on-scroll';
import StickyHeader from './components/sticky-header';

new GalleryCarousel();
new Lightbox();
new MobileMenu();
new RevealOnScroll('.features__item--fade-left', 'left', 1000, '25rem', 250);
new RevealOnScroll('.features__item--fade-right', 'right', 1000, '25rem', 250);
new RevealOnScroll('.testimonials__item', 'bottom', 1000, '25rem', 250);
new StickyHeader();
