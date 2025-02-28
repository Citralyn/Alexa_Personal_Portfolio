const express = require('express'); // import express
const app = express(); // create an express object (can call it anything)
const cats = require('./cats.js');
const dogs = require('./dogs.js');
const app2 = express(); 
const cors = require('cors')

var corsOptions = {
  origin: 'http://localhost:5173'
}



// define a route
app.get('/', (req, res) => {
    res.send('Welcome!');
});

app.get('/aCoolView', (req, res) => {
  var content = "dope view man"; 
  res.render('main.ejs', {
    page_content: content
  });
});

app.get('/users/:userId/books/:bookId', (req, res) => {
  res.send(req.params)
})

app.get('/example/b', (req, res, next) => {
  console.log('the response will be sent by the next function ...')
  next()
}, (req, res) => {
  res.send('Hello from B!')
})

const cb0 = function (req, res, next) {
  console.log('CB0')
  next()
}

const cb1 = function (req, res, next) {
  console.log('CB1')
  next()
}

const cb2 = function (req, res) {
  console.log('CB2')
  res.send('Hello from C!')
}

app.get('/example/c', [cb0, cb1, cb2])

const doThisFirst = function (req, res, next) {
  console.log('first')
  next()
}

app.get('/example/d', [doThisFirst], (req, res, next) => {
  console.log('second')
  next()
}, (req, res) => {
  res.send('Hello!')
})

app.use('/cats', cats);

app.use('/secret', app2);

app.use('/dogs', dogs);

app2.get('/', (req, res) => {
  res.send('Welcome!2');
});

app.get('/api/fetch', cors(corsOptions), (req, res) => {
  console.log("hi fetch")
  res.json("hi fetch");
});

app.get('/api/axios', cors(corsOptions), (req, res) => {
  console.log("hi axios")
  res.json("hi axios");
});

app.get('/vite/api', cors(corsOptions), (req, res) => {
  console.log("hi vite")
  res.json("hi vite");
  
});

// start the server
app.listen(3001, () => { // listen at port 3001 on localhost 
    console.log('Server is running on http://localhost:3001');
});

