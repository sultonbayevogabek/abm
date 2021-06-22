const Joi = require('joi')

module.exports = Joi.object({
    name: Joi.string()
            .max(64)
            .min(3)
            .required()
            .error(Error("Invalid name")),
    phone: Joi.string()
            .pattern(/^9989[012345789][0-9]{7}$/)
            .required()
            .error(Error("Invalid phone number")),
})