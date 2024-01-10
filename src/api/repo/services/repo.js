'use strict';

/**
 * repo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::repo.repo');
