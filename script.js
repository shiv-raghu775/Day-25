
function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const toggle = document.querySelector('.password-toggle');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggle.textContent = 'Hide';
    } else {
        passwordInput.type = 'password';
        toggle.textContent = 'Show';
    }
}