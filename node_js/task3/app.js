const express = require("express");
const _ = require("lodash");
const routes = require('./routes/index');
const methodOverride = require('method-override')

const app = express();

app.use(express.urlencoded({
    limit: 1024 * 1024 * 10
}));

app.use(express.json({
    limit: 1024 * 1024 * 10
}));

app.use(express.static("public"));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(methodOverride('_method'));
app.get('/', function (req, res, next) {
    res.redirect('books/');
})
app.use(routes);

app.locals = {
    _,
}

app.listen('4000', 'localhost', () => {
    console.log('server started')
});