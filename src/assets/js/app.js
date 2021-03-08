import RevealOnScroll from './components/reveal-on-scroll';
import StickyHeader from './components/sticky-header';

new RevealOnScroll('.features__item--fade-left', 'left', 1000, '25rem', 250);
new RevealOnScroll('.features__item--fade-right', 'right', 1000, '25rem', 250);
new RevealOnScroll('.testimonials__item', 'bottom', 1000, '25rem', 250);
new StickyHeader();
