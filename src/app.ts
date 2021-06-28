import { environnement } from './config/environnement';
import express from 'express';
import route from './routes/index'
import connect from './db/connect'

const app = express();
const port = environnement.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('');
});

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
  connect();
  route(app);
});