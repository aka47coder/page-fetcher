const request = require('request');
const fs = require('fs')

const args = process.argv;

request(args[2], (error, response, body) => {
  //console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
  fs.writeFile(args[3], body, err => {
    if (err) {
      console.error(err)
      return
    }
    //file written successfully
  })
  
  
});
let stats = fs.statSync('./index.html');
  //console.log(stats)
  let  size=stats.size;

  console.log (`Downloaded and saved ${size} to ${args[3]}`)
