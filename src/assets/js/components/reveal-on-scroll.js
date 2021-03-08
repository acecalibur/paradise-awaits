import sr from 'scrollreveal';

class RevealOnScroll {
  constructor(els, start, duration, distance, delay) {
    this.itemToReveal = els;
    this.revealItems(start, duration, distance, delay);
  }

  revealItems(start, duration, distance, delay) {
    sr().reveal(this.itemToReveal, {
      origin: start,
      duration,
      distance,
      delay,
    });
  }
}

export default RevealOnScroll;
