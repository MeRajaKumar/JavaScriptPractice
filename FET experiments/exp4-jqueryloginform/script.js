$(document).ready(function () {
    $('#signupForm').submit(function (event) {
        event.preventDefault();

        let isValid = true;

        // Clear previous error messages
        $('.error').text('');

        // Validate Full Name (First and Last Name combined)
        const fullName = $('#fullName').val();
        if (fullName.length < 6) {
            $('#fullNameError').text('Full name must be at least 3 characters.');
            isValid = false;
        }

        // Validate Email
        const email = $('#email').val();
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            $('#emailError').text('Please enter a valid email address.');
            isValid = false;
        }

        // Validate Password
        const password = $('#password').val();
        const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,10}$/;
        if (!passwordPattern.test(password)) {
            $('#passwordError').text('Password must be 6-10 characters long, include a number, a letter, and a special character.');
            isValid = false;
        }

        // Validate Confirm Password
        const confirmPassword = $('#confirmPassword').val();
        if (confirmPassword !== password) {
            $('#confirmPasswordError').text('Passwords do not match.');
            isValid = false;
        }

        // Validate Gender
        if (!$('input[name="gender"]:checked').val()) {
            $('#genderError').text('Please select your gender.');
            isValid = false;
        }

        // Validate Date of Birth
        const dob = $('#dob').val();
        if (!dob) {
            $('#dobError').text('Please select your date of birth.');
            isValid = false;
        }

        // If all fields are valid, submit the form
        if (isValid) {
            alert('Form Submitted Successfully!');
            // You can add AJAX call here to submit the form data if needed.
        }
    });
});
