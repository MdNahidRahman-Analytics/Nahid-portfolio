// ====================================================
// ===== Welcome Modal (Shows Once Per Session) =======
// ====================================================
const modal = document.getElementById("welcomeModal");
const startBtn = document.getElementById("startBtn");
const mainContent = document.querySelector(".main-content");

// Check if modal has already been seen
const seen = sessionStorage.getItem("seenWelcome");

// --- Show modal only the first time ---
if (!seen) {
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  mainContent.style.opacity = "0"; // hide content until Enter is clicked
} else {
  modal.style.display = "none"; // hide modal on reloads
  mainContent.classList.add("visible"); // instantly show content
}

// --- When "Enter" button is clicked ---
startBtn.addEventListener("click", () => {
  // Hide modal
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");

  // Remember that user has seen it
  sessionStorage.setItem("seenWelcome", "1");

  // Wait 0.8s for a smooth fade-in
  setTimeout(() => {
    modal.style.display = "none";
    mainContent.classList.add("visible");
  }, 800);
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
