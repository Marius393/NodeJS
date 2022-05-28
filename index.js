require('dotenv').config();

const express = require('express');

const app = express();
app.use(express.json());

const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = 'mongodb://localhost:27017';

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

const knygos = [
  'Haris Poteris',
  'Dziungliu knyga',
  'Biblija',
];

app.listen(process.env.PORT, () => {
  console.log('Serveris paleistas. Laukia užklausų');
});

app.get('/books', (request, response) => {
  client.connect(async () => {
    const database = client.db('KnyguProjektas');
    const collection = database.collection('Knygos');
    const result = await collection.find({}).toArray();

    response.json(result);

    client.close();
  });
});

app.get('/books/:id', (request, response) => {
  response.json(knygos);
});

app.post('/books', (request, response) => {
  client.connect(async () => {
    const database = client.db('KnyguProjektas');
    const collection = database.collection('Knygos');
    const result = await collection.insertOne({
      name: request.body.bookName,
      pageCount: request.body.bookPageCount,
    });

    response.json(result);

    client.close();
  });
});

app.get('/books/:from/:to', (request, response) => {
  const fromIndex = request.params.from;
  const toIndex = request.params.to;

  const atgnybtasMasyvas = knygos.slice(fromIndex, toIndex);

  response.json(atgnybtasMasyvas);
});
