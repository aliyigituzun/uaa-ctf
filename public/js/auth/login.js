window.addEventListener('load', function() {

    const error = document.getElementById('error');

    document.addEventListener('click', event => {
        if (event.target.id == 'login-button') {

            event.preventDefault();

            const email = document.getElementById('email-input').value;
            const password = document.getElementById('password-input').value;

            if (!email || !email.length || !password || !password.length) {
                error.innerHTML = 'Email or password is missing';
                return;
            }

            serverRequest('/auth/login', 'POST', { email, password }, (err, res) => {
                if (err) {
                    console.log(err)
                    error.innerHTML = err.error || err.user;
                    return;
                }

                if (res.success) {
                    return window.location = '/';
                } else {
                    error.innerHTML = "Couldn't login, please try again later";
                }
            });
        }
    });

});