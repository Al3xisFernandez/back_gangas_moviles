const morgan = require('morgan');
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

app.set('port', process.env.PORT || 4000);

app.set('views', path.join(__dirname, 'views'));
// app.engine('.hbs', exphbs({

// }))
app.use(morgan('dev'));
app.use(express.urlencoded({
    extended:
        false
}));

app.use(require('./routes/index.routes'));
app.use(require('./routes/user.routes'));
app.use(express.static(path.join(__dirname, 'public')));





module.exports = app;