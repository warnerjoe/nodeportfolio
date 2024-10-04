const http = require('http');
const express = require('express');
const path = require('path');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');

const app = express();

app.use(express.static("views"));
app.use(express.json());

// default URL for website
app.get('/', function(req,res){
    res.sendFile(path.join(__dirname+'/views/index.html'));
    //__dirname : It will resolve to your project folder.
  });

app.post('/send-message', (req, res) => {
  console.log(req.body);
});

const server = http.createServer(app);
const port = process.env.PORT || 3000;

server.listen(port);
console.debug('look at that beautiful server on port ' + port + ' p.s. golbez i haven\'t forgot what you did');