import express from 'express';
import { environnement } from './config/environnement';

const app = express();
const port = environnement.PORT;

app.get('/', (req, res) => {
  res.send('');
});

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});