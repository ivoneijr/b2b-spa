var express = require('express');
var app = express();

app.use('/static', express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');


app.get('/', function(req, res){
    // res.send('hello');
    res.render('index');
});


app.listen(3333, function(){
    console.log('listening at 3333 port');
});