
/* 1 uzduotis laiko
const express = require('express');
const app = express();

app.listen(9000, () => { 
    console.log('serveris paleistas!');
});

app.get('/time', (request, response) => {
    const date = new Date();
    const dateString = date.toLocaleDateString();
    const timeString = date.toLocaleTimeString();
    response.send(`${dateString} ${timeString}`);
}); */

// 2 uzduotis: Counter

const express = require('express');
const app = express();

let count = 0;

app.listen(9000, () => {
    console.log('serveris paleistas!');
});

app.get('/counter', (request, response) => {
    count++;
    response.send(`Užklausų skaičius: ${count}`);
});