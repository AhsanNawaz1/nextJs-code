"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    beforeCreate: async (data) => {
      if (!data.upvotes) {
        data.upvotes = [];
      }
      if (!data.downvotes) {
        data.downvotes = [];
      }
    },
  },
};
