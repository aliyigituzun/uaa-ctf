module.exports = (req, res) => {
    return res.render('index/about_us', {
        page: 'index/index',
        title: 'About Us',
        includes: {
            external: {
                css: ['fontawesome', 'page', 'header', 'index', 'background'],
                js: ['serverRequest', 'page']
            }
        },
        url: '/',
        user: req.session.user
    })
}