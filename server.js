const express = require('express');

const app = new express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/api/whoami', (req, res) => {
    let ipaddress = req.connection.remoteAddress;
    if (ipaddress.substr(0, 7) == "::ffff:") {
  ipaddress = ipaddress.substr(7)
}

    let language = req.headers["accept-language"];
    let software = req.headers['user-agent'];

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