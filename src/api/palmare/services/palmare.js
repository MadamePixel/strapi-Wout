'use strict';

/**
 * palmare service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::palmare.palmare');
