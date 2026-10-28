const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword=document.getElementById("confirmPassword").value;

    // Reset previous errors
    document.querySelectorAll(".error").forEach(function (error) {
        error.textContent = "";
    });

    document.getElementById("successMessage").textContent = "";

    let isValid = true;

    // Name validation
    if (name.length < 3) {
        document.getElementById("nameError").textContent =
            "Name must contain at least 3 characters.";
        isValid = false;
    }

    // Email validation
    if (!email.includes("@") ||!email.includes(".")) {
    document.getElementById("emailError").textContent =
        "Enter a valid email address.";
    isValid = false;
}

    // Password validation
    if (password.length < 8) {
        document.getElementById("passwordError").textContent =
            "Password must contain at least 8 characters.";
        isValid = false;
    }

    // Confirm password validation
    if (confirmPassword !== password || confirmPassword === "") {
        document.getElementById("confirmPasswordError").textContent =
            "Passwords do not match.";
        isValid = false;
    }

    // Final result
    if (isValid) {
        document.getElementById("successMessage").textContent =
            "Registration successful!";

        form.reset();
    }
});
