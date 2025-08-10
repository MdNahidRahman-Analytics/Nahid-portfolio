script.js                                                            
// open welcome modal once per visit
const modal = document.getElementById('welcomeModal');
const startBtn = document.getElementById('startBtn');
const seen = sessionStorage.getItem('seenWelcome');
function openModal(){ modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); }
function closeModal(){ modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); }

if(!seen){ openModal(); }
startBtn?.addEventListener('click', () => { sessionStorage.setItem('seenWelcome','1'); closeModal(); });

// open/close panels from cards
const cards = document.querySelectorAll('.card');
const closeBtns = document.querySelectorAll('[data-close]');
const panels = {
  academic: document.getElementById('panel-academic'),
  intern: document.getElementById('panel-intern'),
  certs: document.getElementById('panel-certs'),
  leadership: document.getElementById('panel-leadership'),
  resume: document.getElementById('panel-resume'),
};

cards.forEach(card=>{
  card.addEventListener('click', () => {
    const key = card.getAttribute('data-target');
    // close any open panel
    Object.values(panels).forEach(p => p.classList.remove('open'));
    // open selected
    const panel = panels[key];
    if(panel){ panel.classList.add('open'); panel.scrollIntoView({behavior:'smooth', block:'start'}); }
  });
});

closeBtns.forEach(btn=>{
  btn.addEventListener('click', (e)=>{
    const panel = e.target.closest('.panel');
    panel?.classList.remove('open');
  });
});

// footer year
document.getElementById('year').textContent = new Date().getFullYear();
