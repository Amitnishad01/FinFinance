function login() {
    // Retrieve email and password from the form
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Hardcoded credentials (you would typically fetch these from a database)
    var registeredEmail = "example@example.com";
    var registeredPassword = "password123";

    // Check if entered email and password match the registered credentials
    if (email === registeredEmail && password === registeredPassword) {
        alert("Login successful!");
    // Redirect to home page or perform any other action
        window.location.href = "home.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
}
