const Joi = require('joi')

module.exports = new Joi.object({
    login: Joi.string()
        .min(3)
        .max(24)
        .required(),
    password: Joi.string()
        .required()
        .min(5)
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
})