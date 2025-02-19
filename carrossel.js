document.addEventListener('DOMContentLoaded', () => {
  const carrossel = document.querySelector('.carrossel');
  const buttonLeft = document.querySelector('.button-left');
  const buttonRight = document.querySelector('.button-right');

  function getItemWidth() {
    return document.querySelector('.item').offsetWidth + 100;
  }

  buttonLeft.addEventListener('click', () => {
    const itemWidth = getItemWidth();
    if (carrossel.scrollLeft <= 0) {
      carrossel.scrollTo({
        left: carrossel.scrollWidth,
        behavior: 'smooth'
      });
    } else {
      carrossel.scrollBy({
        left: -itemWidth,
        behavior: 'smooth'
      });
    }
  });

  buttonRight.addEventListener('click', () => {
    const itemWidth = getItemWidth();
    const maxScroll = carrossel.scrollWidth - carrossel.clientWidth;

    if (carrossel.scrollLeft >= maxScroll - 1) {
      carrossel.scrollTo({
        left: 0,
        behavior: 'smooth'
      });
    } else {
      carrossel.scrollBy({
        left: itemWidth,
        behavior: 'smooth'
      });
    }
  });
});