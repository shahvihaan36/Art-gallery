

const filterButtons = document.querySelectorAll('.filter-buttons button');
const images = document.querySelectorAll('.gallery .image');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;


filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.filter-buttons .active').classList.remove('active');
    button.classList.add('active');
    const filter = button.getAttribute('data-filter');

    images.forEach(image => {
      const category = image.getAttribute('data-category');
      if (filter === 'all' || category === filter) {
        image.style.display = 'block';
        image.style.opacity = '1';
        image.style.transform = 'scale(1)';
      } else {
        image.style.opacity = '0';
        image.style.transform = 'scale(0.9)';
        setTimeout(() => (image.style.display = 'none'), 300);
      }
    });
  });
});


images.forEach((img, index) => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.querySelector('img').src;
    currentIndex = index;
  });
});


closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});


prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex].querySelector('img').src;
});
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex].querySelector('img').src;
});


lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) lightbox.style.display = 'none';
});
