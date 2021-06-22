const { checkToken } = require("../modules/jwt");

module.exports = (req, res, next) => {
    let token = req.cookies.token;
    if(!token) {
        res.redirect('/admin/login');
        return false;
    }
    token = checkToken(token);
    if(!token) {
        res.redirect('/admin/login');
        return false;
    }
    req.user = token;
    next();
}