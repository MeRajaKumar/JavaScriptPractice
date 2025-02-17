const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.addEventListener('DOMContentLoaded', function() {
    // Get the form and input elements
    const signUpForm = document.querySelector('.sign-up form');
    const signInForm = document.querySelector('.sign-in form');
    
    // Get the name and password input fields
    const nameInput = document.querySelector('.sign-up input[type="text"]');
    const passwordInput = document.querySelector('.sign-up input[type="password"]');
    const emailInput = document.querySelector('.sign-up input[type="email"]');
    const signUpButton = document.querySelector('.sign-up button');

    const signInEmailInput = document.querySelector('.sign-in input[type="email"]');
    const signInPasswordInput = document.querySelector('.sign-in input[type="password"]');
    const signInButton = document.querySelector('.sign-in button');

    // Sign-Up form validation
    signUpForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Validate name
        if (nameInput.value.length < 3) {
            alert('Name must be at least 3 characters long.');
            return;
        }

        // Validate password: must have at least one digit, one special symbol, and between 10-20 characters
        const password = passwordInput.value;
        const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{10,20}$/;
        if (!passwordRegex.test(password)) {
            alert('Password must contain at least one digit, one special character, and be between 10 and 20 characters.');
            return;
        }

        alert('Sign Up Successful!');
        // If validation passes, submit form (can be added later with AJAX or server-side handling)
    });

    // Sign-In form validation
    signInForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Validate email and password
        const email = signInEmailInput.value;
        const password = signInPasswordInput.value;

        if (email === '' || password === '') {
            alert('Both fields are required.');
            return;
        }

        alert('Sign In Successful!');
        // If validation passes, submit form (can be added later with AJAX or server-side handling)
    });

    // You can also add functionality for the toggle buttons if you want to switch between forms
    const loginButton = document.getElementById('login');
    const registerButton = document.getElementById('register');

    // Toggle between Sign Up and Sign In forms
    loginButton.addEventListener('click', function() {
        document.querySelector('.sign-up').style.display = 'none';
        document.querySelector('.sign-in').style.display = 'block';
    });

    registerButton.addEventListener('click', function() {
        document.querySelector('.sign-up').style.display = 'block';
        document.querySelector('.sign-in').style.display = 'none';
    });
});
