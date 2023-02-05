module.exports = (req, res) => {
    return res.render('auth/register', {
        page: 'auth/register',
        title: 'Register',
        includes: {
            external: {
                css: ['fontawesome', 'page', 'header', 'index', 'input', 'background'],
                js: ['serverRequest', 'page']
            }
        },
        url: 'auth/register',
        user: req.session.user
    })
}