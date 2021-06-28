import  * as userController from './../controller/UserController';
import express from 'express'

const app = express.Router();

app.get('/:id', userController.getUser);
app.post('/', userController.postUser);
app.put('/:id', userController.putUser);

export = app 