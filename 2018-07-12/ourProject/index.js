const Moment = require('moment');
const rp = require('request-promise');
const {sayHi} = require("./myModule.js")

// sayHi()
// myModule()

const url = "https://jsonplaceholder.typicode.com/posts/1";

rp({
    uri: url,
    json: true,
}).then(response => {
    const moment = new Moment();
    console.log(response)
    console.log(moment.format('h:mm:ss a'))
}).catch(console.log)



// console.log(`My first npm script ${moment.format('h:mm:ss a')}`)