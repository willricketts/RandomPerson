#RandomPerson

Generates a JSON document for a random user using the [RandomUser.me API](http://randomuser.me).

###Usage

`npm install randomperson`

```
var randomperson = require('randomperson');

randomperson(function(person){
  console.log(person);  
});

```


###Example Output

```
{  
  "results":[  
     {  
        "user":{  
           "gender":"female",
           "name":{  
              "title":"mrs",
              "first":"jamie",
              "last":"tucker"
           },
           "location":{  
              "street":"7559 lakeshore rd",
              "city":"sacramento",
              "state":"california",
              "zip":"34674"
           },
           "email":"jamie.tucker58@example.com",
           "username":"organicdog449",
           "password":"yankees1",
           "salt":"yMhDb7qz",
           "md5":"fd2a97c32f6799af135e4e8c668966ce",
           "sha1":"865dd8a32b99fdaeaf5d8d5a53af6fe14590ef26",
           "sha256":"6e028423497b54847811cfc4ccbec8678fb19f3979069ed12e53849ee58ff828",
           "registered":"1241921793",
           "dob":"195925551",
           "phone":"(733)-702-8155",
           "cell":"(889)-444-4778",
           "SSN":"543-74-5850",
           "picture":"http://api.randomuser.me/portraits/women/84.jpg"
        },
        "seed":"6055d884e4805cd",
        "version":"0.4"
     }
  ]
}

```
