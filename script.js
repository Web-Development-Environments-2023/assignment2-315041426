const navLinks = document.querySelectorAll('.nav-link');
const contentSections = document.querySelectorAll('.content-section');

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function (e) {
        e.preventDefault();

        // Remove the active class from all content sections
        for (let j = 0; j < contentSections.length; j++) {
            contentSections[j].classList.remove('active');
        }

        // Add the active class to the selected content section
        const targetId = this.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);
        targetSection.classList.add('active');
    });
}

/******************************************  Register Form Validation *********************************/

const usersDict = {};
                                    //check if password meets the requirement // 

const passwordInput = document.getElementById("password");
const passwordValidation = document.getElementById("password_validation");
var isPassGood = false;
var password = null;
passwordInput.addEventListener("keyup", () => {
     password = passwordInput.value;

    // Check if password meets requirements
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const isLongEnough = password.length >= 8;

    // Update validation message
    if (isLongEnough && (hasUpperCase || hasLowerCase) && hasNumbers) {
        isPassGood = true;
        passwordValidation.innerHTML = "Password is valid :)";
    } else {
        isPassGood = false;
        passwordValidation.innerHTML = "Password must be at least 8 characters long and contain letters and numbers";
    }
});

                                    // passwords matching check

const password2Input = document.getElementById("password2");
const passwordsMatch = document.getElementById("passwords-match");
var isPassMatch = false;

password2Input.addEventListener("keyup", () => {
    const password2 = password2Input.value;

    // Update validation message
    if (password2 === password ) {
        passwordsMatch.innerHTML = "Passwords match :)";
        isPassMatch = true;
    } else {
        isPassMatch = false;
        passwordsMatch.innerHTML = "password doesnt match!";
    }
});

                            //first name and last name doesnt contain numbers

const firstnameInput = document.getElementById("firstname");
const lastnameInput = document.getElementById("lastname");
const nameMessage = document.getElementById("name-validation");
var nameIsGood = true;
firstnameInput.addEventListener("keyup", nameWithoutNumbers);
lastnameInput.addEventListener("keyup", nameWithoutNumbers);

function nameWithoutNumbers(event) {
    const firsthasNumbers = /[0-9]/.test(firstnameInput.value);
    const lasthasNumbers = /[0-9]/.test(lastnameInput.value);
    if (firsthasNumbers || lasthasNumbers) {
        nameIsGood = false;
        nameMessage.innerHTML = "first and last name can't contain numbers!";
    }
    else {
        nameIsGood = true;
        nameMessage.innerHTML = "";
    }
}
const emailInput = document.getElementById("email");
const emailMessage = document.getElementById("email-validation");
var emailIsGood = false;

emailInput.addEventListener("input", validateEmail);

function validateEmail(event) {
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
        emailIsGood = true;
        emailMessage.innerHTML = "";
    } else {
        emailIsGood = false;
        emailMessage.innerHTML = "Please enter a valid email address";
    }
}

function checkRegister() {
    const regSection = document.getElementById("register-section");
    var inputs = regSection.querySelectorAll('input');

    for (var i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            alert('Please fill in all required fields.');
            return false;
        }
    }
    if (!(isPassGood && isPassMatch && nameIsGood && emailIsGood)) {
        alert('one of the fields has not been filled out correctly.')
        return false;
    }

    // Submit the form if all required fields are filled
    usersDict[document.getElementById("username").value] = passwordInput.value
    const login_section = document.getElementById("login-section");

    for (let j = 0; j < contentSections.length; j++) {
        contentSections[j].classList.remove('active');
    }
    login_section.classList.add('active')
}

function checkLogin() {
    const usernameLoginInput = document.getElementById("usernameLogin").value
    const passwordLoginInput = document.getElementById("passwordLogin").value
    if (usernameLoginInput === "") {
        alert('You didnt fill out username');
        return false;
    }
    else if (passwordLoginInput === "") {
        alert('You didnt fill out password');
        return false;
    }
    else if (!(usernameLoginInput in usersDict) || (usersDict[usernameLoginInput] != passwordLoginInput)) {
        alert('username or password are incorrect!')
        return false;
    }
    else {
        document.getElementById("login-section").classList.remove('active')
        document.getElementById("game-section").classList.add('active')


    }
}


