$(document).ready(function () {
    document.getElementById("labelError").style.display = 'none';
});

function validate() {
    var password = document.getElementById("pwd");
    var email = document.getElementById("email");
    if (email.value === "student@ttu.ee" && password.value === "pass123") {
        window.location = "student/studentHeader.html";
    } else if (email.value === "professor@ttu.ee" && password.value === "pass123") {
        window.location = "professor/professorHeader.html";
    } else {
        document.getElementById("labelError").style.display = 'block';
    }

}