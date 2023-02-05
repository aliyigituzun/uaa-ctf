module.exports = (req, res) => {

    req.session.destroy(err => {
        if (err) {
            res.write(JSON.stringify({ error: err, success: false }));
            return res.end();
        }

        res.write(JSON.stringify({ success: true }));
        return res.end();
    });
}