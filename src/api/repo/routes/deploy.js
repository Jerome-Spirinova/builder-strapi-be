module.exports = {
    routes: [
      {
        method: "POST",
        path: "/deploy",
        handler: "repo.deploy",
        config: {
          policies: [],
          middlewares: [],
        },
      },
      {
        method: "POST",
        path: "/repos",
        handler: "repo.createRepo",
        config: {
          policies : []
        }
      },
      {
        method: "GET",
        path: "/repos",
        handler: "repo.getCurrentUserRepos",
        config: {
          policies: []
        }
      }
    ],
  };