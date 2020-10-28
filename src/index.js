const app = require('./app');

app.listen(app.get('port'), () => {
    console.log('******************************');
    console.log(`SERVER RUNNING, PORT: ${app.get('port')}`);
    console.log('******************************')
});