const app = require('./config/server');
require('./app/routes/students')(app);

//Starting server
app.listen(app.get('port'), () => {
    console.log('server on port ', app.get('port'))
}) 
