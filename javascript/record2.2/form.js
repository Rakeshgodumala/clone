function validateForm() {
  let isValid = true;

  let name = document.getElementById("name").value.trim();
  let address = document.getElementById("address").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let course = document.getElementById("course").value;

  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  let phonePattern = /^[0-9]{10}$/;

  document.getElementById("nameError").innerText = "";
  document.getElementById("addressError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("passwordError").innerText = "";
  document.getElementById("phoneError").innerText = "";
  document.getElementById("courseError").innerText = "";

  if (name === "") {
      document.getElementById("nameError").innerText = "Name is required.";
      isValid = false;
  }

  if (address === "") {
      document.getElementById("addressError").innerText = "Address is required.";
      isValid = false;
  }

  if (email === "") {
      document.getElementById("emailError").innerText = "Email is required.";
      isValid = false;
  } else if (!emailPattern.test(email)) {
      document.getElementById("emailError").innerText = "Invalid email format.";
      isValid = false;
  }

  if (password === "") {
      document.getElementById("passwordError").innerText = "Password is required.";
      isValid = false;
  } else if (password.length < 6) {
      document.getElementById("passwordError").innerText = "At least 6 characters.";
      isValid = false;
  }

  if (phone === "") {
      document.getElementById("phoneError").innerText = "Phone number is required.";
      isValid = false;
  } else if (!phonePattern.test(phone)) {
      document.getElementById("phoneError").innerText = "Must be 10 digits.";
      isValid = false;
  }

  if (course === "") {
      document.getElementById("courseError").innerText = "Please select a course.";
      isValid = false;
  }

  return isValid;
}