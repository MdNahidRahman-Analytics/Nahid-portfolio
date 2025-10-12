// ====================================================
// ===== Welcome Modal (Shows Once Per Session) =======
// ====================================================
const modal = document.getElementById("welcomeModal");
const startBtn = document.getElementById("startBtn");
const mainContent = document.querySelector(".main-content");

// Check if user has already seen the modal
const seen = sessionStorage.getItem("seenWelcome");

// --- Show modal only on first visit ---
if (!seen) {
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  mainContent.style.opacity = "0"; // hide content initially
} else {
  mainContent.classList.add("visible"); // show content if already seen
  modal.style.display = "none"; // no modal after first time
}

// --- When "Enter" button is clicked ---
startBtn.addEventListener("click", () => {
  // Hide modal immediately
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");

  // Save to sessionStorage so it doesn't show again
  sessionStorage.setItem("seenWelcome", "1");

  // Wait 1 second, then fade in content
  setTimeout(() => {
    mainContent.classList.add("visible");
    modal.style.display = "none"; // completely remove modal
  }, 1000);
});


// ====================================================
// ===== Panels (Cards that Open/Close Details) =======
// ====================================================
const cards = document.querySelectorAll(".card");
const closeBtns = document.querySelectorAll("[data-close]");

const panels = {
  about: document.getElementById("panel-about"),
  academic: document.getElementById("panel-academic"),
  intern: document.getElementById("panel-intern"),
  certs: document.getElementById("panel-certs"),
  leadership: document.getElementById("panel-leadership"),
  resume: document.getElementById("panel-resume"),
};

// --- Open selected panel ---
cards.forEach((card) => {
  card.addEventListener("click", () => {
    const key = card.getAttribute("data-target");
    Object.values(panels).forEach((p) => p?.classList.remove("open"));
    const panel = panels[key];
    if (panel) {
      panel.classList.add("open");
      panel.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// --- Close panel when × clicked ---
closeBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const panel = e.target.closest(".panel");
    panel?.classList.remove("open");
  });
});


// ====================================================
// ===== Footer Year (Auto Updates Each Year) =========
// ====================================================
document.getElementById("year").textContent = new Date().getFullYear();
