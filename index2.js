require('dotenv').config();

const express = require('express');

const app = express();

console.log(process.env.PORT);

const knygos = [
  'Haris Poteris',
  'Biblija',
  '1984',
];

app.listen(process.env.PORT, () => {
  console.log('Serveris paleistas. Laukia užklausų');
});

app.get('/books', (request, response) => {
  response.json(knygos);
});

app.get('/books/:id', (request, response) => {
  response.json(knygos[request.params.id]);
});

app.get('/books/:from/:to', (request, response) => {
  const fromIndex = Number(request.params.from);
  const toIndex = Number(request.params.to);

  const atgnybtasMasyvas = knygos.slice(fromIndex, toIndex);
  response.json(atgnybtasMasyvas);
});
