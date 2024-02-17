
        function validateForm() {
            var firstName = document.getElementById("firstName").value;
            var lastName = document.getElementById("lastName").value;
            var dob = document.getElementById("dob").value;
            var phoneNumber = document.getElementById("phoneNumber").value;
            var address = document.getElementById("address").value;
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;

            // Basic validation - check if fields are empty
            if (firstName.trim() === "" || lastName.trim() === "" || dob.trim() === "" || phoneNumber.trim() === "" || address.trim() === "" || email.trim() === "" || password.trim() === "") {
                alert("All fields are required");
                return false;
            }

            // Additional validation checks can be added here

            // Redirect to another page after successful form submission
            redirectToAnotherPage(); // Change this function name to your actual redirection logic
            return false; // Prevent default form submission
        }

        function resetForm() {
            document.getElementById("registration").reset();
        }

        function redirectToLoginPage() {
            window.location.href = "Login.html";
        }

        function redirectToAnotherPage() {
            // Change this line to redirect to your desired page
            window.location.href = "Login.html";

            //reset form
        }
        function resetForm() {
            var form = document.querySelector('.registration-form');
            form.reset();
        }
    

        //first password should be same for re-password

        function validateForm() {
            var password = document.getElementById("password").value;
            var repassword = document.getElementById("repassword").value;

            if (password !== repassword) {
                alert("Passwords do not match");
                return false;
            }
            return true;
        }






// after submit move to next page
        function validateForm() {
        
            redirectToLoginPage();
            return false; // Prevent default form submission
        }

        function redirectToLoginPage() {
            window.location.href = "Login.html";
        }

