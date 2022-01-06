const Joi = require('@hapi/joi');

//Login Validation

const loginUser = data => {
    const schema = Joi.object({
        email: Joi.string()
            .min(6)
            .required(),
        password: Joi.string()
            .min(6)
            .required(),
    });
    return schema.validate(data);
}
module.exports = loginUser;