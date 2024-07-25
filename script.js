// function displayFullName(event) {
//     event.preventDefault();
//     var firstName = document.getElementById("firstName").value;
//     var lastName = document.getElementById("lastName").value;
//     if (firstName && lastName) {
//         document.getElementById("fullNameDisplay").innerText = "Full Name: " + firstName + " " + lastName;
//     }else {
//         document.getElementById("fullNameDisplay").innerText = "";
//     }
// }
function displayFullName(event) {
    event.preventDefault();
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);

    if (firstName && lastName) {
        document.getElementById("fullNameDisplay").innerText = "Full Name: " + firstName + " " + lastName;
    } else {
        document.getElementById("fullNameDisplay").innerText = "";
    }
    
    // Log the result to see what is being displayed
    console.log("Displayed Text:", document.getElementById("fullNameDisplay").innerText);
}
