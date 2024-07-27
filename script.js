function displayFullName(event) {
    event.preventDefault();
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    // document.getElementById("fullNameDisplay").innerText = "Full Name: " + firstName + " " + lastName;
     if (!firstName || !lastName) {
                document.getElementById("fullNameDisplay").innerText = "Please enter both first and last names.";
            } else {
                document.getElementById("fullNameDisplay").innerText = "Full Name: " + firstName + " " + lastName;
            }

}

