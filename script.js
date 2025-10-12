// ===== Welcome Modal (Once per Session) =====
const modal = document.getElementById('welcomeModal');
const startBtn = document.getElementById('startBtn');
const mainContent = document.querySelector('.main-content');
const seen = sessionStorage.getItem('seenWelcome');

if (!seen) {
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  mainContent.style.opacity = '0';
} else {
  modal.style.display = 'none';
  mainContent.classList.add('visible');
}

startBtn.addEventListener('click', () => {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  sessionStorage.setItem('seenWelcome', '1');
  setTimeout(() => {
    modal.style.display = 'none';
    mainContent.classList.add('visible');
  }, 800);
});

// ===== Panels (Open/Close) =====
const cards = document.querySelectorAll('.card');
const closeBtns = document.querySelectorAll('[data-close]');
const panels = {
  about: document.getElementById('panel-about'),
  academic: document.getElementById('panel-academic'),
  intern: document.getElementById('panel-intern'),
  certs: document.getElementById('panel-certs'),
  leadership: document.getElementById('panel-leadership'),
  resume: document.getElementById('panel-resume'),
};

cards.forEach(card => {
  card.addEventListener('click', () => {
    const key = card.getAttribute('data-target');
    Object.values(panels).forEach(p => p?.classList.remove('open'));
    const panel = panels[key];
    if (panel) {
      panel.classList.add('open');
      panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

closeBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    const panel = e.target.closest('.panel');
    panel?.classList.remove('open');
  });
});

// ===== Footer Year =====
document.getElementById('year').textContent = new Date().getFullYear();
