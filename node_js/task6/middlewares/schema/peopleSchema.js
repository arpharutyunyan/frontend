import Joi from "joi";

const peopleSchema = {
    auth: {
        body: Joi.object({
            passport: Joi.string().regex(/^[A-Z]{2}\d{6}$/).messages({
                'string.pattern.base': 'Invalid passport'
            }),
            idCard: Joi.string().optional(),
            passportOrIdCard: Joi.string().optional(),
        }),
        query: Joi.object({
            limit: Joi.number().integer().positive().max(100).default(20)
        })
    },
    create: {
        body: Joi.object({
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            idCard: Joi.string().optional().length(12),
            passport: Joi.string().optional().length(9),
        })
    },
    update: {
        body: Joi.object({
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            idCard: Joi.string().optional().length(12),
            passport: Joi.string().optional().length(9),
        })
    }
}

export default peopleSchema;
