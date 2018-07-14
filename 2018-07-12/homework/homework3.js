const { getPost, logTime, prettyPrint } = require("./myModule");

getPost(2).then(data => {
  logTime();
  console.log(prettyPrint(data));
});
