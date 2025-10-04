// ===== Welcome Modal (Shows once per session) =====
const modal = document.getElementById('welcomeModal');
const startBtn = document.getElementById('startBtn');
const seen = sessionStorage.getItem('seenWelcome');

function openModal() {
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}

if (!seen) {
  openModal();
}

startBtn?.addEventListener('click', () => {
  sessionStorage.setItem('seenWelcome', '1');
  closeModal();
});


// ===== Panels (Cards that open details) =====
const cards = document.querySelectorAll('.card');
const closeBtns = document.querySelectorAll('[data-close]');

// ✅ Added missing 'about' panel here
const panels = {
  about: document.getElementById('panel-about'),
  academic: document.getElementById('panel-academic'),
  intern: document.getElementById('panel-intern'),
  certs: document.getElementById('panel-certs'),
  leadership: document.getElementById('panel-leadership'),
  resume: document.getElementById('panel-resume'),
};

// ===== Open selected panel when card is clicked =====
cards.forEach(card => {
  card.addEventListener('click', () => {
    const key = card.getAttribute('data-target');

    // Close any currently open panel
    Object.values(panels).forEach(p => p?.classList.remove('open'));

    // Open the selected panel
    const panel = panels[key];
    if (panel) {
      panel.classList.add('open');
      panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== Close button inside panels =====
closeBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const panel = e.target.closest('.panel');
    panel?.classList.remove('open');
  });
});

// ===== Footer Year (Auto-updates) =====
document.getElementById('year').textContent = new Date().getFullYear();
