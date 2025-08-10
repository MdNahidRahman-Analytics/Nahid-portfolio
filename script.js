// open welcome modal once per visit
const modal = document.getElementById('welcomeModal');
const startBtn = document.getElementById('startBtn');
const seen = sessionStorage.getItem('seenWelcome');

function openModal() {
  if (!modal) return;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
}
function closeModal() {
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}

if (!seen && modal) openModal();
startBtn?.addEventListener('click', () => {
  sessionStorage.setItem('seenWelcome', '1');
  closeModal();
  // Open About by default after entering
  openPanelByKey('about');
});

// open/close panels from cards
const cards = document.querySelectorAll('.card');
const closeBtns = document.querySelectorAll('[data-close]');

const panels = {
  academic: document.getElementById('panel-academic'),
  intern: document.getElementById('panel-intern'),
  certs: document.getElementById('panel-certs'),
  leadership: document.getElementById('panel-leadership'),
  resume: document.getElementById('panel-resume'),
  about: document.getElementById('panel-about'),             // NEW
  publication: document.getElementById('panel-publication'), // optional (add the panel when ready)
  travel: document.getElementById('panel-travel'),           // optional (add the panel when ready)
};

function openPanelByKey(key) {
  Object.values(panels).forEach(p => p?.classList.remove('open'));
  const panel = panels[key];
  if (panel) {
    panel.classList.add('open');
    panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', `#${key}`);
  }
}

// Mouse click -> open panel
cards.forEach(card => {
  // Make cards keyboard-focusable & button-like
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'button');

  card.addEventListener('click', () => {
    const key = card.getAttribute('data-target');
    openPanelByKey(key);
  });

  // Keyboard support (Enter / Space)
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const key = card.getAttribute('data-target');
      openPanelByKey(key);
    }
  });
});

// Close buttons
closeBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const panel = e.target.closest('.panel');
    panel?.classList.remove('open');
    // Clear hash when closing
    history.replaceState(null, '', location.pathname + location.search);
  });
});

// Open panel from URL hash on first load (e.g., #about)
// If no hash, open About by default (and only if panel exists)
window.addEventListener('DOMContentLoaded', () => {
  const keyFromHash = (location.hash || '').replace('#', '');
  if (keyFromHash && panels[keyFromHash]) {
    openPanelByKey(keyFromHash);
  } else {
    openPanelByKey('about');
  }
});

// footer year
document.getElementById('year')?.textContent = new Date().getFullYear();
