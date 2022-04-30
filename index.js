
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
});