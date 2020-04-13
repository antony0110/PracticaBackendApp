const express = require('express');
const morgan = require ('morgan');
const exhbs = require ('express-handlebars')
const path = require('path');


//Inicializar 
const app = express();

//settings
app.set('port', process.env.Port || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exhbs({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname:'.hbs',
    helpers: require('./lib/handlebars')
}));
app.set('view engine', '.hbs');

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Global Variables 
app.use((req, res, next) => {
    next();
})

//Routes
app.use(require('./routes'));

//Public 


//Starting the Server
app.listen(app.get('port'),() => {
    console.log('server on port', app.get('port'));
});