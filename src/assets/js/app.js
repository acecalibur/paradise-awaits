import RevealOnScroll from './components/RevealOnScroll';
import StickyHeader from './components/StickyHeader';

new RevealOnScroll('.features__item--fade-left', 'left', 1000, '25rem', 250);
new RevealOnScroll('.features__item--fade-right', 'right', 1000, '25rem', 250);
new RevealOnScroll('.testimonials__item', 'bottom', 1000, '25rem', 250);
new StickyHeader();