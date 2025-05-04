document.addEventListener('DOMContentLoaded', () => {
    const mainImg = document.getElementById('mainImage');
    document.querySelectorAll('.image-row img').forEach(thumb => {
      thumb.addEventListener('click', () => {
        mainImg.src = thumb.src;
        mainImg.alt = thumb.alt;
      });
    });
  });


document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('menuToggle');
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
    });

    // Valfritt: stäng om man klickar utanför menyn
    document.addEventListener('click', (e) => {
      if (!toggle.contains(e.target)) {
        toggle.classList.remove('open');
      }
    });
  });