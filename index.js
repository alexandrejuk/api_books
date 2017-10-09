import app from './app';

app.listen(app.get('port'), () => {
    console.log(`Servido no ar ${app.get('port')}`);
})