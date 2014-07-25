var rest = require('rest');

function randomPerson(callback){
  rest('http://api.randomuser.me/').then(function(response){
    callback(response);
  });
}
