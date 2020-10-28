const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const handlebars = require('express-handlebars');

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'handlebars');
app.engine('handlebars', handlebars({
    layoutsDir: path.join(__dirname, 'views/layouts')
}));

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', require('./routes/index.routes'));


module.exports = app;