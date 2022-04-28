
const express = require('express');

//import express from 'express'  galetu ir taip rasyti, kad nebutu tu trieju taskeliu
const PORT = 9000;

const app = express();

app.listen(PORT, () => {
    console.log('labas, serveris veikia!');
});

app.get('/', (request, response) => {
    console.log('ivyko uzklausa')
    response.send("Hello world!");
});