const { getPost, logTime } = require("./myModule");

getPost(2).then(data => {
  logTime();
  console.log(data);
});
