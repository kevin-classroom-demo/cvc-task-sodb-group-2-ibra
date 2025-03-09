document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();
        let errorMessage = "";

        if (name === "") {
            errorMessage += "Name is required.\n";
        }
        if (email === "") {
            errorMessage += "Email is required.\n";
        } else if (!validateEmail(email)) {
            errorMessage += "Invalid email format.\n";
        }
        if (message === "") {
            errorMessage += "Message cannot be empty.\n";
        }

        if (errorMessage !== "") {
            alert(errorMessage); // Show error messages
        } else {
            alert("Form submitted successfully!"); // Success message
            form.submit(); // Submit form if valid
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
