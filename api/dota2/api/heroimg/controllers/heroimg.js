'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
const { sanitizeEntity } = require('strapi-utils');

module.exports = {
    async find(ctx){
        let entities;
        
        ctx.query = {
            ...ctx.query,
            _limit: -1
            };
         
        if (ctx.query._q) {
            entities = await strapi.services.heroimg.search(ctx.query);
            } else {
            entities = await strapi.services.heroimg.find(ctx.query);
            }
        
            return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.heroimg }));
        },

        async findOne(ctx) {
            const { id } = ctx.params;
            const entity = await strapi.services.heroimg.findOne({ id });
            return sanitizeEntity(entity, { model: strapi.models.heroimg });
            },
        
        async findOneByName(ctx) {
            const { name } = ctx.params;
            const entity = await strapi.services.heroimg.findOne({ name });
            return sanitizeEntity(entity, { model: strapi.models.heroimg });
            },
};
