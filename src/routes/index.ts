import express from 'express'
import * as loginController from '../controller/LoginController'
import loginRoutes from './LoginRoutes'
import userRoutes from './UserRoutes'

export default function (app){
    app.use('', loginRoutes);
    app.use('/users', userRoutes);
}
