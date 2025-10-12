// ================================================
// 🌟 Welcome Modal (Shows once per session)
// ================================================
window.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("welcomeModal");
  const startBtn = document.getElementById("startBtn");
  const seen = sessionStorage.getItem("seenWelcome");

  // --- Open Modal Function ---
  function openModal() {
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  }

  // --- Close Modal Function ---
  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  }

  // --- Show modal only if not seen before ---
  if (!seen) {
    // small delay for smooth appearance
    setTimeout(openModal, 300);
  }

  // --- Close modal when "Enter" button is clicked ---
  startBtn?.addEventListener("click", () => {
    sessionStorage.setItem("seenWelcome", "1");
    closeModal();
  });

  // --- Close modal when pressing Enter key on keyboard ---
  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && modal.classList.contains("open")) {
      sessionStorage.setItem("seenWelcome", "1");
      closeModal();
    }
  });
});

// ================================================
// 🗂️ Panels (Cards that open and close)
// ================================================
const cards = document.querySelectorAll(".card");
const closeBtns = document.querySelectorAll("[data-close]");

// --- All panel elements mapped by their IDs ---
const panels = {
  about: document.getElementById("panel-about"),
  academic: document.getElementById("panel-academic"),
  intern: document.getElementById("panel-intern"),
  certs: document.getElementById("panel-certs"),
  leadership: document.getElementById("panel-leadership"),
  resume: document.getElementById("panel-resume"),
};

// --- Open selected panel when a card is clicked ---
cards.forEach((card) => {
  card.addEventListener("click", () => {
    const key = card.getAttribute("data-target");

    // Close any open panel
    Object.values(panels).forEach((p) => p?.classList.remove("open"));

    // Open the selected one
    const panel = panels[key];
    if (panel) {
      panel.classList.add("open");
      panel.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// --- Close button inside panels ---
closeBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const panel = e.target.closest(".panel");
    panel?.classList.remove("open");
  });
});

// ================================================
// 🕒 Footer Year (Auto-updates every year)
// ================================================
document.getElementById("year").textContent = new Date().getFullYear();
