
// Load express
const express = require('express');

// Create our express app
const app = express();

// Define a "root" route directly on app
// Tomorrow, we'll use best practice routing
app.get('/', function (req, res) {
  res.send('<h1>"99 Bottles of beer and soda on the wall "</h1>');
});

app.get('/bottle', function(req, res) {
    res.send('<li><a href="index.html">take one down, pass it around </a></li>    ');
  });
  
//No of bottle Zero on the wall.
app.get('/:number_of_bottles', (req, res)=>{
    if(req.params.number_of_bottles === '0'){
        res.send(`
        <h1>${req.params.number_of_bottles}no of Bottles of beer on the wall</h1>
        <a href="/"</a>Put back all the  99 bottles of beer on the wall</a>
    `)
    } else {
        res.send(`
        <h2>${req.params.number_of_bottles}  no of Bottles of  the beer  on the wall</h2>
        <a href="/${req.params.number_of_bottles - 1}"</a>Take one bottle  down and Pass it around</a>
    `)
    }
});
// Tell the app to listen on port 3000
// for HTTP requests from clients

app.listen(3000, function () {
  console.log('Listening on port 3000');
});



