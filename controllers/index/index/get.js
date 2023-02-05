module.exports = (req, res) => {
    return res.render('index/index', {
        page: 'index/index',
        title: 'UAACTF',
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