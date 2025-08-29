document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // Get form values
        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        // Retrieve stored user data
        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (storedUser && email === storedUser.email && password === storedUser.password) {
            alert("Login successful!");
            window.location.href = "options.html"; // Redirect to options page
        } else {
            alert("Invalid email or password.");
        }
    });
});
