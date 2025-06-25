const form = document.getElementById("signup-form");
const emailInput = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = emailInput.value.trim();

  if (validateEmail(email)) {
    message.textContent = "🎉 Subscribed successfully!";
    message.classList.add("success");
    message.classList.remove("error");
    emailInput.value = "";
  } else {
    message.textContent = "Please enter a valid email address.";
    message.classList.remove("success");
  }
});

function validateEmail(email) {
  return /^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email);
}
