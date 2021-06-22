const userMessageValidations = require("../validations/userMessageValidations.js");

const router = require("express").Router();

router.get("/", async (req, res) => {
	res.render('index');
});

router.get("*", (req, res) => {
	res.render('admin/404');
});

router.post('/', async (req, res) => {
	try {
		let {
			name,
			phone
		} = req.body
		phone = phone.replace(/[^0-9]+/g, '')
		const data = await userMessageValidations.validateAsync({
			name,
			phone
		})
		const user = await req.postgres.users.create({
			name: data.name,
			phone: data.phone,
		})
		res.render('index', {
			success: 'Successfully sent'
		})
	} catch (e) {
		res.render('index', {
			error: e + ""
		})
	}
})
module.exports = {
	path: '/',
	router
}