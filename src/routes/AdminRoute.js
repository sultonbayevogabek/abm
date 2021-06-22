const router = require("express").Router();
const AdminMiddleware = require("../middlewares/AdminMiddleware");
const { checkHash } = require("../modules/bcrypt");
const { generateToken } = require("../modules/jwt.js");
const adminValidation = require('../validations/adminValidation.js')

router.get('/', AdminMiddleware, async (req, res) => {
    let contacts = await req.postgres.users.findAll()
    res.render('admin/admin', {
        contacts
     });
});

router.get('/login', (req, res) => {
    res.render('admin/lockscreen');
});

router.post('/login', async (req, res) => {
    try{
        let {name: login, password} = req.body;
        let data = await adminValidation.validateAsync({login, password});
        const admin = await req.postgres.admin.findOne({
            where : {
                name: data.login
            }
        })

        if(!admin) throw new Error("admin now");
        let isTrust = checkHash(data.password, admin.dataValues.password);
        if(!isTrust) throw new Error("password incored");
        let token = generateToken({name: login});
        res.cookie('token', token).redirect('/admin');
    } catch (e) {
        res.render('admin/lockscreen', {
            error: "Login or Password incored"
        });
    }
});

router.post('/remove', async (req, res)=> {
    try {
		const { id } = req.body
		await req.postgres.users.destroy({
            where : {
                user_id: id
            }
        })
		res.redirect('/admin');
	} catch (e) {
		res.render('admin/lockscreen', {
            error: e + ""
        });
	}
})

module.exports = {
    path: '/admin',
    router
}