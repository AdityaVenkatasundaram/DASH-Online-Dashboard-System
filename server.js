var express = require('express');
var app = express();
require('./dbConnection');
let router = require('./route/route');
let http = require('http').createServer(app);
let io = require('socket.io')(http);
var env = require('dotenv').config()
var ejs = require('ejs');
var path = require('path');
var bodyParser = require('body-parser');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');	

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', router);

io.on('connection',(socket)=>{
    console.log('a client is connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    
    setInterval(()=>{
        socket.emit('number', parseInt(Math.random()*10));
    }, 1000);
});

var port = process.env.port || 3000;
http.listen(port, ()=> {
    console.log('App listening to: ' + port);
});