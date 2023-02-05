module.exports = (req, res) => {
    return res.render('auth/login', {
        page: 'auth/login',
        title: 'Login',
        includes: {
            external: {
                css: ['fontawesome', 'page', 'header', 'index', 'input', 'background'],
                js: ['serverRequest', 'logout', 'page']
            }
        },
        url: 'auth/login',
        user: req.session.user
    })
}