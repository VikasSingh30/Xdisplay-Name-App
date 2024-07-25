function displayFullName(event) {
    event.preventDefault();
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    if (firstName && lastName) {
        document.getElementById("fullNameDisplay").innerText = "Full Name: " + firstName + " " + lastName;
    }else {
        document.getElementById("fullNameDisplay").innerText = "";
    }
}
