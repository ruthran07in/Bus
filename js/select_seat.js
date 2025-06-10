/**
 * Toggle navigation drawer open/close (same as buslist.js)
 */
const menuBtn = document.getElementById("menu-btn");
const navDrawer = document.getElementById("nav-drawer");

menuBtn.addEventListener("click", () => {
  navDrawer.classList.toggle("open");
});

// Close the drawer when clicking outside
document.addEventListener("click", (e) => {
  if (
    !navDrawer.contains(e.target) &&
    !menuBtn.contains(e.target) &&
    navDrawer.classList.contains("open")
  ) {
    navDrawer.classList.remove("open");
  }
});

/**
 * “Go Back” button: navigates back to buslist.html
 */
document.getElementById("back-btn").addEventListener("click", () => {
  window.location.href = "buslist.html";
});

/**
 * Highlight bottom nav items when clicked (optional)
 */
document.querySelectorAll(".nav-item-bottom").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".nav-item-bottom").forEach((el) =>
      el.classList.remove("active")
    );
    item.classList.add("active");
  });
});

/**
 * Seat‐selection logic:
 *   - Clicking an available seat toggles it between “available” and “processing.”
 *   - “counter” and “booked” seats are not clickable.
 */
document.querySelectorAll(".seating-grid .seat.available").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("processing")) {
      btn.classList.remove("processing");
      btn.classList.add("available");
    } else {
      btn.classList.remove("available");
      btn.classList.add("processing");
    }
  });
});

/* ─────────────────────────────────────────────────────────────────────────
   CUSTOM MODAL DIALOG SETUP FOR “Please select at least one seat…”
───────────────────────────────────────────────────────────────────────── */
const seatModal = document.getElementById("seat-modal");
const seatModalOkBtn = document.getElementById("seat-modal-ok-btn");

function showSeatModal(message) {
  const msgElem = document.getElementById("seat-modal-message");
  msgElem.textContent = message;
  seatModal.style.display = "flex";
  seatModal.setAttribute("aria-hidden", "false");
}

function hideSeatModal() {
  seatModal.style.display = "none";
  seatModal.setAttribute("aria-hidden", "true");
}

seatModalOkBtn.addEventListener("click", () => {
  hideSeatModal();
});

/**
 * “CONTINUE” button:
 *   - If no seat has class “processing,” show modal.
 *   - Otherwise, redirect to personal_details.html.
 */
document.getElementById("continue-btn").addEventListener("click", () => {
  const selectedSeats = Array.from(
    document.querySelectorAll(".seating-grid .seat.processing")
  );

  if (selectedSeats.length === 0) {
    showSeatModal("Please select at least one seat before continuing.");
  } else {
    window.location.href = "personal_details.html";
  }
});
