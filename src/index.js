const express = require('espress');
const morgan = require ('morgan');

//Inicializar 
const app = express();

//settings
app.set('port', process.env.Port || 4000);

//Middlewares
app.use(morgan('dev'));

//Global Variables 


//Routes


//Public 


//Starting the Server
app.listen(app.get('port'),() => {
    console.log('server on port', app.get('port'));
});