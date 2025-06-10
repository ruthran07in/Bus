// Toggle navigation drawer open/close
const menuBtn = document.getElementById("menu-btn");
const navDrawer = document.getElementById("nav-drawer");

menuBtn.addEventListener("click", () => {
  navDrawer.classList.toggle("open");
});

// Close drawer when clicking outside the drawer
document.addEventListener("click", (e) => {
  if (
    !navDrawer.contains(e.target) &&
    !menuBtn.contains(e.target) &&
    navDrawer.classList.contains("open")
  ) {
    navDrawer.classList.remove("open");
  }
});

// Utility arrays for date parsing (unchanged)
const weekdays = [
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
];
const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

// Update the custom date display whenever the input changes
function updateDateDisplay(dateString) {
  if (!dateString) return;
  const dt = new Date(dateString);
  const day = dt.getDate();
  const weekday = weekdays[dt.getDay()];
  const monthName = months[dt.getMonth()];
  const year = dt.getFullYear();

  document.querySelector(".date-day").textContent = day;
  document.querySelector(".date-weekday").textContent = weekday;
  document.querySelector(".date-month").textContent = `${monthName} ${year}`;
}

// Initialize date display from default input value
const dateInput = document.getElementById("travel-date");
updateDateDisplay(dateInput.value);

// Whenever the user picks a new date, update the big‐number + weekday/month
dateInput.addEventListener("change", (e) => {
  updateDateDisplay(e.target.value);
});

// CUSTOM MODAL ELEMENTS
const customModal = document.getElementById("custom-modal");
const modalOkBtn = document.getElementById("modal-ok-btn");

// Function to show the modal with a given message
function showModal(message) {
  const msgElem = document.getElementById("modal-message");
  msgElem.textContent = message;
  customModal.style.display = "flex";
  customModal.setAttribute("aria-hidden", "false");
}

// Function to hide the modal
function hideModal() {
  customModal.style.display = "none";
  customModal.setAttribute("aria-hidden", "true");
}

// Close the modal when OK is clicked
modalOkBtn.addEventListener("click", () => {
  hideModal();
});

// Search buses button: custom dialog if fields missing, else redirect
document.getElementById("search-btn").addEventListener("click", () => {
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const dateValue = dateInput.value; // "YYYY-MM-DD"

  if (!from || !to || !dateValue) {
    // Show custom dialog instead of alert
    showModal("Please select From, To, and a travel date.");
    return;
  }

  // If everything is selected, redirect to buslist.html
  window.location.href = "buslist.html";
});
