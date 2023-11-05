document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registration-form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const registerButton = document.getElementById("register-button");
    const registrationSuccess = document.getElementById("registration-success");

    registrationForm.addEventListener("submit", function (e) {
        e.preventDefault();
        if (passwordInput.value === confirmPasswordInput.value) {
            registrationSuccess.textContent = "Registration successful!";
            
        } else {
            registrationSuccess.textContent = "";
            confirmPasswordInput.setCustomValidity("Passwords do not match");
        }
    });

    usernameInput.addEventListener("input", validateForm);
    passwordInput.addEventListener("input", validateForm);
    confirmPasswordInput.addEventListener("input", validateForm);

    function validateForm() {
        if (registrationForm.checkValidity()) {
            registerButton.removeAttribute("disable");
        } else {
            registerButton.setAttribute("disable", "disable");
        }

        if (usernameInput.validity.valueMissing) {
            document.getElementById("username-error").textContent = "Username is required";
        } else {
            document.getElementById("username-error").textContent = "";
        }

        if (passwordInput.validity.valueMissing) {
            document.getElementById("password-error").textContent = "Password is required";
        } else {
            document.getElementById("password-error").textContent = "";
        }

        if (confirmPasswordInput.validity.valueMissing) {
            document.getElementById("confirm-password-error").textContent = "Confirm Password is required";
        } else {
            document.getElementById("confirm-password-error").textContent = "";
        }
    }
});
