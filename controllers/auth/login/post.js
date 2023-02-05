const User = require('../../../models/user/User');

module.exports = (req, res) => {

    if(!req.body.email || !req.body.password) {
        res.write(JSON.stringify({ error: 'Email or password is missing', success: false }));
        return res.end();
    }

    User.findUser(req.body, (err, user) => {
        if (err) {
            res.write(JSON.stringify({ error: err, success: false }));
            return res.end();
          }

        req.session.user = user;
        
        
        res.write(JSON.stringify({ success: true, user }));
        return res.end()
        }
    );

}