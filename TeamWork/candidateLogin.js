function validateForm() {
  let facultyId = document.getElementById("facultyId").value;
  let password = document.getElementById("password").value;

  if (facultyId.trim() === "") {
    alert("Please enter your valid ID number.");
  }

  if (password.trim() === "" ) {
    alert("Please enter your password.");
  }
}
