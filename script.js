// ================= BACK TO TOP =================
const backToTop = document.querySelector('.back-to-top');

if (backToTop) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.style.display = 'block';
    } else {
      backToTop.style.display = 'none';
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ================= GALLERY LIGHTBOX =================
const galleryImages = document.querySelectorAll('.gallery-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

// Helper: open lightbox
function openLightbox(index) {
  if (!lightbox || !lightboxImg) return;

  currentIndex = index;
  showImage();
  lightbox.style.display = 'flex';
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

// Helper: close lightbox
function closeLightbox() {
  if (!lightbox) return;

  lightbox.style.display = 'none';
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = 'auto';
}

// Helper: show current image
function showImage() {
  if (!lightboxImg || galleryImages.length === 0) return;
  lightboxImg.src = galleryImages[currentIndex].src;
  lightboxImg.alt = galleryImages[currentIndex].alt || 'Gallery preview';
}

// Open Lightbox on image click
galleryImages.forEach((img, index) => {
  img.addEventListener('click', () => {
    openLightbox(index);
  });
});

// Close Lightbox (X button)
if (closeBtn) {
  closeBtn.addEventListener('click', closeLightbox);
}

// Close when clicking outside image
if (lightbox) {
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
}

// Next Image
if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    if (galleryImages.length === 0) return;
    currentIndex = (currentIndex + 1) % galleryImages.length;
    showImage();
  });
}

// Previous Image
if (prevBtn) {
  prevBtn.addEventListener('click', () => {
    if (galleryImages.length === 0) return;
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    showImage();
  });
}

// ================= NAVBAR SCROLL STATE =================
const mainNavbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (!mainNavbar) return;

  if (window.scrollY > 50) {
    mainNavbar.classList.add('navbar-scrolled');
  } else {
    mainNavbar.classList.remove('navbar-scrolled');
  }
});

// ================= LIGHTBOX KEYBOARD NAV =================
document.addEventListener('keydown', (e) => {
  if (!lightbox || lightbox.style.display !== 'flex') return;

  switch (e.key) {
    case 'ArrowRight':
      if (nextBtn) nextBtn.click();
      break;
    case 'ArrowLeft':
      if (prevBtn) prevBtn.click();
      break;
    case 'Escape':
      closeLightbox();
      break;
  }
});

// ================= HERO BACKGROUND SLIDER =================
const heroSection = document.querySelector('.hero-section');

// Add your hero images here
const heroImages = [
  "image/home/1.jpg",
  "image/home/2.jpg",
  "image/home/3.jpg",
  "image/home/4.jpg",
  "image/home/5.jpg",
  "image/home/6.jpg"
];

let heroIndex = 0;

function changeHeroBackground() {
  if (!heroSection || heroImages.length === 0) return;

  heroIndex = (heroIndex + 1) % heroImages.length;
  heroSection.style.backgroundImage = `url('${heroImages[heroIndex]}')`;
}

// Change every 6 seconds
setInterval(changeHeroBackground, 6000);

let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      // navbar + back-to-top logic here
      ticking = false;
    });
    ticking = true;
  }
});







