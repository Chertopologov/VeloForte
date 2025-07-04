


  const scrollBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


document.addEventListener('DOMContentLoaded', function() {
  const serviceCards = document.querySelectorAll('.service-card');
  
  serviceCards.forEach(card => {
    card.addEventListener('click', function() {
      // Закрываем все другие открытые карточки
      serviceCards.forEach(otherCard => {
        if (otherCard !== card && otherCard.classList.contains('active')) {
          otherCard.classList.remove('active');
        }
      });
      
      // Переключаем текущую карточку
      this.classList.toggle('active');
    });
  });
});