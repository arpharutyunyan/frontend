const express = require('express');
const routes = require('./routes/index');
const { v4: uuidV4 } = require('uuid');

const app = express();

app.use(express.urlencoded({
  limit: 1024 * 1024 * 10,
}));
app.use(express.json({
  limit: 1024 * 1024 * 10
}));
app.use(express.static('public'))

app.use('/', routes);

app.listen(4000, 'localhost', () => {
  console.log('Server started')
})
