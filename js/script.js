document.addEventListener('DOMContentLoaded', function() {
 
  const scrollBtn = document.getElementById('scrollToTop');
  
  
  function toggleScrollButton() {
    if (window.scrollY > 300) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', toggleScrollButton);
  

  scrollBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
 
  toggleScrollButton();
  

  const serviceCards = document.querySelectorAll('.service-card');
  
  function toggleServiceCard(clickedCard) {

    document.querySelectorAll('.service-card.active').forEach(activeCard => {
      if (activeCard !== clickedCard) {
        activeCard.classList.remove('active');
      }
    });

    clickedCard.classList.toggle('active');
  }
  

  serviceCards.forEach(card => {
    card.addEventListener('click', function() {
      toggleServiceCard(this);
    });

    const content = card.querySelector('.service-content');
    if (content) {
      content.addEventListener('click', function(e) {
        e.stopPropagation();
      });
    }
  });
  

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});

// Автоматическая прокрутка фото
function setupPhotoSlider() {
  const slider = document.querySelector('.photo-slider');
  const slides = document.querySelectorAll('.slide');
  
  // Дублируем слайды для бесконечной прокрутки
  if (slider && slides.length > 0) {
    slider.innerHTML = slider.innerHTML + slider.innerHTML;
  }
  
  // Пауза при наведении
  slider.addEventListener('mouseenter', () => {
    slider.style.animationPlayState = 'paused';
  });
  
  slider.addEventListener('mouseleave', () => {
    slider.style.animationPlayState = 'running';
  });
}

// Вызываем функцию после загрузки DOM
document.addEventListener('DOMContentLoaded', setupPhotoSlider);