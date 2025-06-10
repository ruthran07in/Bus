/**
 * Toggle navigation drawer open/close
 * (Same logic as in buslist.js / select_seat.js / personal_details.js)
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
 * “Go Back” button: returns to personal_details.html
 */
document.getElementById("back-btn").addEventListener("click", () => {
  window.location.href = "personal_details.html";
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
 * Cancel button: go back to personal_details.html
 */
// Cancel button should navigate to payment_failed.html
document.getElementById("cancel-btn").addEventListener("click", () => {
  window.location.href = "payment_failed.html";
});

/**
 * Pay button: validate fields and simulate a successful payment
 */
document.getElementById("pay-btn").addEventListener("click", () => {
  // Grab all input fields:
  const cardNumber = document.getElementById("card-number").value.trim();
  const expMonth = document.getElementById("exp-month").value.trim();
  const expYear = document.getElementById("exp-year").value.trim();
  const cvv = document.getElementById("cvv").value.trim();
  const cardType = document.querySelector('input[name="card-type"]:checked');

  // Basic validation:
  if (!cardType) {
    alert("Please select a card type.");
    return;
  }
  if (!cardNumber) {
    alert("Please enter your card number.");
    document.getElementById("card-number").focus();
    return;
  }
  // Simple digit‐only check (16 digits maximum including spaces)
  const ccNumDigits = cardNumber.replace(/\s+/g, "");
  if (!/^\d{13,16}$/.test(ccNumDigits)) {
    alert("Please enter a valid card number (13–16 digits).");
    document.getElementById("card-number").focus();
    return;
  }
  if (!expMonth) {
    alert("Please enter expiration month.");
    document.getElementById("exp-month").focus();
    return;
  }
  if (!/^(0?[1-9]|1[0-2])$/.test(expMonth)) {
    alert("Expiration month must be between 01 and 12.");
    document.getElementById("exp-month").focus();
    return;
  }
  if (!expYear) {
    alert("Please enter expiration year.");
    document.getElementById("exp-year").focus();
    return;
  }
  if (!/^\d{2}$/.test(expYear)) {
    alert("Expiration year must be two digits (e.g. 24 for 2024).");
    document.getElementById("exp-year").focus();
    return;
  }
  if (!cvv) {
    alert("Please enter CVV.");
    document.getElementById("cvv").focus();
    return;
  }
  if (!/^\d{3,4}$/.test(cvv)) {
    alert("CVV must be 3 or 4 digits.");
    document.getElementById("cvv").focus();
    return;
  }

  // If we reach here, all required fields are filled and in roughly valid format.
  // You can integrate a real payment SDK here (Stripe, PayHere, etc.).
  // For demo purposes, we simply show a success alert and optionally redirect.

    window.location.href = "payment_successful.html";
  // Example redirect to a “Thank You” page (if you have one):
  // window.location.href = "thank_you.html";
});
