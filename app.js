// Require Libraries
const express = require('express');

// App Setup
const app = express();

// Middleware
const exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Routes
// app.get('/', (req, res) => {
//   // set the url of the gif
//   const gifUrl = 'https://media1.tenor.com/images/c1eee7009b69805d1b407215de01c85a/tenor.gif?itemid=15538987'
//   // render the hello-gif view, passing the gifUrl into the view to be displayed
//   res.render('hello-gif', { gifUrl })
// })

// example URL "http://localhost:3000/?term=hey"
app.get('/', (req, res) => {
  console.log(req.query) // => "{ term: hey" }/

  res.render('home')
})

app.get('/greetings/:name', (req, res) => {
  // grab the name from the path provided
  const name = req.params.name;
  // render the greetings view, passing along the name
  res.render('greetings', { name });
})


// Start Server

app.listen(3000, () => {
  console.log('Gif Search listening on port localhost:3000!');
});