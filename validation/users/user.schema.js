const joi = require("@hapi/joi");

const schema = {
    user: joi.object({
        password: joi.string().min(6).required(),
        name: joi.string().min(3).required(),
        addres:joi.string().max(50).required(),
        join_date:joi.string().max(50).required(),
        email:joi.string().max(50).required(),
    })
};

module.exports = schema;