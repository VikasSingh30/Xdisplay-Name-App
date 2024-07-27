function displayFullName(event) {
    event.preventDefault();
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    document.getElementById("fullNameDisplay").innerText = "Full Name: " + firstName + " " + lastName;

}

