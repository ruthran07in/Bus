/**
 * Toggle navigation drawer open/close
 */
const menuBtn = document.getElementById("menu-btn");
const navDrawer = document.getElementById("nav-drawer");

menuBtn.addEventListener("click", () => {
  navDrawer.classList.toggle("open");
});

// Close the drawer if clicking outside
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
 * “Go Back” button simply navigates back in history
 */
document.getElementById("back-btn").addEventListener("click", () => {
  window.history.back();
});

/**
 * Highlight bottom nav items when clicked
 * (Optional – similar to home page)
 */
document.querySelectorAll(".nav-item-bottom").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".nav-item-bottom").forEach((el) =>
      el.classList.remove("active")
    );
    item.classList.add("active");
  });
});s

const bookBtn2 = document.getElementById("search-btn1");
if (bookBtn2) {
  bookBtn2.addEventListener("click", () => {
    window.location.href = "select_seat.html";
  });
}