import Joi from "joi";

export default {
    list: {
        query: Joi.object({
            limit: Joi.number().integer().positive().max(100).default(20)
        }),
    },
    create: {
        body: Joi.object({
            personId: Joi.number().integer().required(),
            partyId: Joi.number().integer(),
        })
    },
    update: {
        body: Joi.object({
            personId: Joi.number().integer().required(),
            partyId: Joi.number().integer(),
        })
    },
    vote: {
        body: Joi.object({
            candidateId: Joi.number().integer().required(),
        })
    }
}

