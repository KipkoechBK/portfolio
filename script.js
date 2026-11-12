const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  navigation.classList.toggle('is-open', open);
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    navigation.classList.remove('is-open');
  });
});

document.addEventListener('click', (event) => {
  const navWrap = document.querySelector('.nav-wrap');

  if (!navWrap.contains(event.target)) {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    navigation.classList.remove('is-open');
  }
});

document.querySelector('#year').textContent = new Date().getFullYear();

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.timeline-item, .project-card, .skill-card, .proof-grid > div').forEach((item) => {
    item.classList.add('reveal');
    observer.observe(item);
  });
}

const title = document.querySelector("#typing-title");

const text = "Mechanical engineer & instructor";
let index = 0;

function typeText() {
    if (index < text.length) {
        title.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 75);
    }
}

typeText();