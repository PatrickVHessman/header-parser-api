const express = require('express');

const app = new express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/api/whoami', (req, res) => {
    let ipaddress = req.connection.remoteAddress;
    let language = req.headers["accept-language"];
    let software = req.headers['user-agent'];
    console.log(software);

    let obj = {
        ipaddress: ipaddress,
        language: language,
        software: software
    }
    res.send(obj);
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`App listening at http://localhost:${process.env.PORT}`)
});