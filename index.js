const http = require('http');
const express = require('express');
const path = require('path');
// const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config()

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

  const transporter = nodemailer.createTransport({
    host: 'smtp.mail.me.com',
    port: 587,
    secure:false,
    auth: {
      user: process.env.ICLOUD_USER,
      pass: process.env.ICLOUD_PASS,
    },
  });

  const mailOptions = {
    from: process.env.ICLOUD_USER,
    to: 'warnerjoe337@icloud.com',
    subject: 'Form submission',
    text: req.body.message
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send('error');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Success');
    }
  }
  )
});

const server = http.createServer(app);
const port = process.env.PORT || 3000;

server.listen(port);
console.debug('look at that beautiful server on port ' + port + ' p.s. golbez i haven\'t forgot what you did');