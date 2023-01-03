'use strict';

// Import du framework "express"
const express = require('express');


// Création du serveur Web
const app = express();

app.get('/', (req, res) => {

    const body = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Demo</title>
        </head>
        <body>
            <h1>Hello World</h1>
        </body>
        </html>
    `;

    res.send(body);
});

app.get('/product/:id([0-9]+)', (req, res) => {
    const productId = req.params.id;
    const body = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Demo</title>
        </head>
        <body>
            <h1>Product Id : ${productId}</h1>
        </body>
        </html>
    `;
    res.send(body);
});

app.all('*', (req, res) => {
    const body = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Demo</title>
        </head>
        <body>
            <h1>Error 404 (╯°□°）╯︵ ┻━┻</h1>
        </body>
        </html>
    `;
    res.status(404).send(body);
});


// Demarrage du serveur Web
app.listen(8080, () => {
    console.log('Web Server up on port 8080');
});