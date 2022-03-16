const withAuth = (req, res, next) => {
    if(!req.session.customer_id) {
        res.redirect('/login');
    }
    else {
        next();
    }
}

module.exports = withAuth;