window.addEventListener('load', function() {

    const error = document.getElementById('error');

    document.addEventListener('click', event => {
        if (event.target.id == 'register-button') {

            event.preventDefault();

            const email = document.getElementById('email-input').value;
            const password = document.getElementById('password-input').value;

            if (!email || !email.length || !password || !password.length) {
                error.innerHTML = 'Email or password is missing';
                return;
            }

            serverRequest('/auth/register', 'POST', { email, password }, (err, res) => {
                if (err) {
                    error.innerHTML = err;
                    return window.location = '/';
                }

                if (res.success) {
                    return;
                } else {
                    error.innerHTML = "Couldn't register user, please try again later";
                }
            });
        }
    });

});