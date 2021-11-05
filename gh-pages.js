const ghpages = require("gh-pages");

ghpages.publish(
  "public", // path to public directory
  {
    branch: "gh-pages",
    repo: "https://github.com/themarcusmin/startpage", // Update to point to your repository
    user: {
      name: "Marcus Min", // update to use your name
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);
