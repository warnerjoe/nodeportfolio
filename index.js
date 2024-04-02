const http = require('http');
const express = require('express');

const app = express();
app.use(express.json());
app.use(express.static("express"));


app.use('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/views/index.html'));
    //__dirname : It will resolve to your project folder
})

const server = http.createServer(app);
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server running on ${PORT}`))