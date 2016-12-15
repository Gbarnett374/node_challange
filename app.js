const express = require('express');
const app = express();
const server = require('http').createServer(app);
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');

// Need this to parse the incoming post data. 
app.use(bodyParser.urlencoded({ extended: false }))

server.listen(8888, () => {
  console.log('I am running.');
});

app.get('/', (req, res) => {
  console.log(req.session);
  res.render('index', { 
    name: '',
    counter: '' 
  });
});

app.post('/hello', (req, res) => {
  if (req.body.hidden_name) {
    name = req.body.hidden_name + ' ' + req.body.name;
    counter = parseInt(req.body.counter) + 1;
  } else {
    name = req.body.name
    counter = 1;
  }
  console.log(res.rawHeaders);
  res.render('index', { 
    name: name,
    counter: counter 
  });
});