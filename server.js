var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello MGT-656!');
});
app.get('/nickname', function(request, response){
    response.send('I don\'t know why my nickname is shiny-horse.');
});
app.listen(process.env.PORT || 4000);