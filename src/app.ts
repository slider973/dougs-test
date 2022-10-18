import express, {Application} from 'express';
import {fakeTransaction} from '../assets/data';
import {postValidationUseCase} from './postValidationUseCase';

const app: Application = express();

const port: number = 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/movements/validation', postValidationUseCase);
app.get('/movements/:id', (req, res) => {
  const result = fakeTransaction.find(
    data => data.id === parseInt(req.params.id),
  );
  res.json(result);
});
app.listen(port, function () {
  console.log(`App is listening on port ${port} !`);
});
