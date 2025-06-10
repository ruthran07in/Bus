/**
 * Toggle navigation drawer open/close
 */
const menuBtn = document.getElementById("menu-btn");
const navDrawer = document.getElementById("nav-drawer");

menuBtn.addEventListener("click", () => {
  navDrawer.classList.toggle("open");
});

// Close drawer if clicking outside
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
 * “Go Back” button: returns to payment.html
 */
document.getElementById("back-btn").addEventListener("click", () => {
  window.location.href = "payment.html";
});

/**
 * “See My Journey” button: navigate to journey.html
 */
document.getElementById("see-journey-btn").addEventListener("click", () => {
  // Replace with your actual journey page when ready
  window.location.href = "journey.html";
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
