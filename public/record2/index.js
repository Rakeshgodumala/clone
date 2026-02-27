function stu() {
  var name = document.forms.RegForm.Name.value;
  var email = document.forms.RegForm.EMail.value;
  var phone = document.forms.RegForm.Telephone.value;
  var what = document.forms.RegForm.Subject.value;
  var password = document.forms.RegForm.Password.value;
  var address = document.forms.RegForm.Address.value;

  var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
  var regPhone = /^\d{10}$/;
  var regName = /^[a-zA-Z\s]+$/; // Allows letters and spaces

  if (name === "" || !regName.test(name)) {
      window.alert("Please enter your name properly.");
      document.forms.RegForm.Name.focus();
      return false;
  }

  if (address === "") {
      window.alert("Please enter your address.");
      document.forms.RegForm.Address.focus();
      return false;
  }

  if (email === "" || !regEmail.test(email)) {
      window.alert("Please enter a valid e-mail address.");
      document.forms.RegForm.EMail.focus();
      return false;
  }

  if (password === "") {
      alert("Please enter your password");
      document.forms.RegForm.Password.focus();
      return false;
  }

  if (password.length < 6) {
      alert("Password should be at least 6 characters long");
      document.forms.RegForm.Password.focus();
      return false;
  }

  if (phone === "" || !regPhone.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      document.forms.RegForm.Telephone.focus();
      return false;
  }

  if (what.selectedIndex === -1) {
      alert("Please select your course.");
      document.forms.RegForm.Subject.focus();
      return false;
  }

  return true; // Allow form submission if all validations pass
}