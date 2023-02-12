const form = document.getElementById("contact-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    alert("All fields are required. Please fill out the form.");
  } else  {
    alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    form.reset();
  }
});