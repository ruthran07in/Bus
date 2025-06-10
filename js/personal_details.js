/**
 * Toggle navigation drawer open/close
 * (exactly same code as buslist.js and select_seat.js)
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
 * “Go Back” button: returns to select_seat.html
 */
document.getElementById("back-btn").addEventListener("click", () => {
  window.location.href = "select_seat.html";
});

/**
 * Highlight bottom nav items when clicked
 * (Optional – same pattern as previous pages)
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
 * “Proceed To Pay” button logic:
 *   - Validate that all four fields are non-empty.
 *   - Validate mobile number matches pattern if desired.
 *   - Validate email is non-empty (the browser’s built-in type="email" will alert if malformed).
 *   - Ensure “agree-terms” checkbox is checked.
 *   - If any validation fails, show an alert. Otherwise, proceed (example: alert or redirect).
 */
document.getElementById("proceed-btn").addEventListener("click", (e) => {
  e.preventDefault();

  // Get form fields
  const nameInp = document.getElementById("name");
  const mobileInp = document.getElementById("mobile");
  const nicInp = document.getElementById("nic");
  const emailInp = document.getElementById("email");
  const agreeChk = document.getElementById("agree-terms");

  // Trimmed values
  const nameVal = nameInp.value.trim();
  const mobileVal = mobileInp.value.trim();
  const nicVal = nicInp.value.trim();
  const emailVal = emailInp.value.trim();
  const agreed = agreeChk.checked;

  // Simple validation
  if (!nameVal) {
    alert("Please enter your Name.");
    nameInp.focus();
    return;
  }
  if (!mobileVal) {
    alert("Please enter your Mobile Number.");
    mobileInp.focus();
    return;
  }
  // (Optional) mobile regex check
  const mobilePattern = /^[0-9\s\-()+]{7,20}$/;
  if (!mobilePattern.test(mobileVal)) {
    alert("Please enter a valid Mobile Number.");
    mobileInp.focus();
    return;
  }
  if (!nicVal) {
    alert("Please enter your NIC or Passport Number.");
    nicInp.focus();
    return;
  }
  if (!emailVal) {
    alert("Please enter your Email address.");
    emailInp.focus();
    return;
  }
  // Browser’s type="email" attribute will catch invalid email formats automatically
  if (!agreeChk.checked) {
    alert("You must agree to the Terms & Conditions before proceeding.");
    agreeChk.focus();
    return;
  }

  // If we reach here, all fields are filled and checkbox is checked
  // Replace the following with your actual payment‐processing redirect logic:
  alert(
    "All details are valid! Proceeding to payment gateway...\n\n" +
      "Name: " + nameVal + "\n" +
      "Mobile: " + mobileVal + "\n" +
      "NIC/Passport: " + nicVal + "\n" +
      "Email: " + emailVal
  );

  // Example redirect (uncomment when you have a real payment page)
  // window.location.href = "payment_gateway.html";
});
