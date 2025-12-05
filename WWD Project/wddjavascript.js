document.getElementById("newsletterForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const email = document.getElementById("emailInput").value;
  const message = document.getElementById("message");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    message.textContent = "Please enter a valid email address.";
    message.style.color = "red";
    return;
  }

  message.textContent = "Thanks for signing up!";
  message.style.color = "green";

  document.getElementById("emailInput").value = "";
});