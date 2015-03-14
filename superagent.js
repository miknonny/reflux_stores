var request = require('superagent');


request
  .get('http://localhost:3000/people.json')
  .end(function(err, res) {
    console.log(res.body[0].name);
  })