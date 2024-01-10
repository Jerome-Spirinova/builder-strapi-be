'use strict';

/**
 * repo controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const { exec } = require('child_process');
const path = "E:/Spirinova/builder-strapi-be/src/script/test.bat";

module.exports = createCoreController('api::repo.repo', ({strapi}) => ({
    async deploy(ctx) {
        try{
            const { repoUrl } = ctx.request.body;
            exec(path, (error, stdout, stderr) => {
                console.log(`Shell script output: ${stdout}`);
                console.error(`Shell script errors: ${stderr}`);
            })
            ctx.body = repoUrl
            console.log("This is repo url:", repoUrl);
        }
        catch(err) {
            console.log(err, "This is error");
        }
    },

    async createRepo(ctx) {
        try {
            // Get the logged-in user
            const user = ctx.state.user;
    
            // Get the repoUrl from the request body
            const { repoUrl } = ctx.request.body;
    
            // Create a new repo associated with the user
            const repo = await strapi.entityService.create('api::repo.repo', {
                data: {
                    repoUrl: repoUrl,
                    users: user.id
                }
            });
    
            // Send the created repo as the response
            ctx.body = repo;
        } catch (err) {
            console.log(err, "This is error");
            ctx.status = 500;
            ctx.body = err;
        }
    },

    async getCurrentUserRepos(ctx) {
        try {
          // Get the logged-in user
          const user = ctx.state.user;
      
          // Get the repos associated with the user
          const repos = await strapi.entityService.findMany('api::repo.repo', {
            filters: { users: user.id }
        });
      
          // Send the repos as the response
          ctx.body = repos;
        } catch (err) {
          console.log(err, "This is error");
          ctx.status = 500;
          ctx.body = err;
        }
      }
}));
