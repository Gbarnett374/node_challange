const express = require('express');
const app = express();
const server = require('http').createServer(app);
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');

// Need this to parse the incoming post data. 
app.use(bodyParser.urlencoded({ extended: false }));

server.listen(8888, () => {
  console.log('We are up and running on port 8888.');
});

app.get('/', (req, res) => {
  let name;
  let counter;
  if (req.query.name) {
    name = req.query.name.replace('Hello', 'Greetings');
  }
  res.render('index', { 
    name: name,
    counter: counter
  });
});

app.post('/show', (req, res) => {
  let name;
  let counter;
  if (req.body.hidden_name) {
    name = `${req.body.hidden_name } ${req.body.name}`;
    counter = parseInt(req.body.counter) + 1;
  } else {
    name = `Hello ${req.body.name}`;
    counter = 1;
  }

  res.render('index', { 
    name: name,
    counter: counter 
  });
});