import express from 'express'
import * as loginController from '../controller/LoginController'

const app = express.Router();

app.post('/login', loginController.login);
app.get('/logout', loginController.logout);

export = app