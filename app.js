import express from 'express';
import {sequelize} from './DB/conexion.js'
import { routerType } from './router/TypeUserRouter.js';
import { routerUser } from './router/UserRouter.js';
import bodyParser from 'body-parser';

const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routerType)
app.use('/type', routerUser)
const conexion= async () =>{
    try {
      await sequelize.authenticate();
      await sequelize.sync({ force: false });
      console.log('Connection has been established successfully.');
      app.listen(port, () => {
        console.log(`Servidor corriendo en el puerto ${port}`)
      })
  } catch (error) {
      console.error(`Error ${error}`);
  }
}

conexion()