 /**
  * Used environment variables:
  *     APP_NAME: name of the app
  *     PORT: which port is it hosted on
  * 
  */

const dotenv = require('dotenv');
const express = require('express');
const http = require('http');
const path = require('path');
const fs = require('fs');

dotenv.config();

process.env.PORT = process.env.PORT ? process.env.PORT : 8080;
process.env.APPNAME = process.env.APPNAME ? process.env.APPNAME : 'KeySpot Demo';

const app = express()

app.use(express.json());

app.get('/', (req, res) => {
    let htmlString = fs.readFileSync(path.join(process.cwd(), 'public', 'index.html'), {encoding: 'utf-8'});
    Object.keys(process.env).map(key => {
        htmlString = htmlString.replaceAll(key, process.env[key]);
    });
    res.send(htmlString);
});

app.post('/variables', (req, res) => {
    let body = {};
    Object.keys(req.body).map(key => {
        body[key] = process.env[key] || null;
    });

    res.json(body);
});

app.get('*', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'public', req.url));
});

console.log(`Serving ${process.env.APPNAME || 'KeySpot Demo App'} on port ${PORT}!`);
http.createServer(app).listen(PORT);