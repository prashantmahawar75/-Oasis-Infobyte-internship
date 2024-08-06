function register() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    if (username && password) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        alert('User registered successfully!');
        switchForm('login');
    } else {
        alert('Please fill in both fields.');
    }
}

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        switchForm('securedPage');
    } else {
        alert('Invalid username or password.');
    }
}

function logout() {
    switchForm('login');
}

function switchForm(formId) {
    const forms = document.querySelectorAll('.form-container');
    forms.forEach(form => form.classList.remove('active'));

    const activeForm = document.getElementById(formId);
    activeForm.classList.add('active');
}

// Initially show the login form
switchForm('login');
