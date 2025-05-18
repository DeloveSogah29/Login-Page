function togglePassword() {
            const passwordInput = document.getElementById('password-input');
            const showPasswordCheckbox = document.getElementById('show-password');
            if (showPasswordCheckbox.checked) {
                passwordInput.type = 'text';
            } else {
                passwordInput.type = 'password';
            }
        }
        document.getElementById('login-button').addEventListener('click', function() {
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password-input').value;

            if (username && email && password) {
                alert('Login successful!');
            } else {
                alert('Please fill in all fields.');
            }});