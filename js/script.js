

    document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      const wrapper = card.closest('.card-wrapper');
      wrapper.classList.toggle('open');
    });
  });


  const reviewsWrapper = document.querySelector('.reviews-wrapper');

  reviewsWrapper.addEventListener('wheel', (e) => {
    e.preventDefault();
    reviewsWrapper.scrollBy({
      left: e.deltaY,
      behavior: 'smooth'
    });
  });