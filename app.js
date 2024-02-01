import express from 'express';
import {sequelize} from './DB/conexion.js'
import { routerType } from './router/TypeUserRouter.js';
import { routerUser } from './router/UserRouter.js';

const app = express()
const port = 3000

app.use('/', routerType)
const conexion= async () =>{
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
      app.listen(port, () => {
        console.log(`Servidor corriendo en el puerto ${port}`)
      })
  } catch (error) {
      console.error(`Error ${error}`);
  }
}

conexion()