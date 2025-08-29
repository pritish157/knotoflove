document.addEventListener("DOMContentLoaded", () => {
    const registrationForm = document.getElementById("registrationForm");

    registrationForm.addEventListener("submit", (event) => {
        event.preventDefault();
        
        // Get form values
        const name = document.getElementById("regName").value;
        const email = document.getElementById("regEmail").value;
        const phone = document.getElementById("regPhone").value;
        const dob = document.getElementById("regDob").value;
        const gender = document.getElementById("regGender").value;
        const password = document.getElementById("regPassword").value;

        // Basic validation (can be extended)
        if (name && email && phone && dob && gender && password) {
            // Store the data in local storage for this example
            const user = {
                name: name,
                email: email,
                phone: phone,
                dob: dob,
                gender: gender,
                password: password
            };

            localStorage.setItem("user", JSON.stringify(user));
            alert("Registration successful!");
            window.location.href = "login.html"; // Redirect to login page
        } else {
            alert("Please fill in all fields.");
        }
    });

    // Initialize Flatpickr for the date input
    flatpickr("#regDob", {
        dateFormat: "Y-m-d",
        allowInput: true,
        locale: {
            firstDayOfWeek: 1 // Start the week on Monday
        }
    });
});


