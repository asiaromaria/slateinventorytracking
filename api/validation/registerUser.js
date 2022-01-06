const Joi = require('@hapi/joi');

//Register Validation

const registerUser = data => {
    const schema = Joi.object({
        name: Joi.string()
            .min(2)
            .required(),
        email: Joi.string()
            .min(6)
            .required(),
        password: Joi.string()
            .min(6)
            .required(),
    });
    return schema.validate(data);
}
module.exports = registerUser;