import * as dotenv from 'dotenv' 
//console.log(dotenv.config())
dotenv.config();
import express from "express";
import handlerError from "./src/middlewares/error-handler.middleware.js"
import routerEventos from './src/routers/routerEventos.js';
//import eventosRouter from "./src/routers/eventos.router.js";
import cors from 'cors'


const app = express();
app.use(express.json());
app.use(cors())
//app.use('/api/eventos', eventosRouter.router);

app.use(handlerError);
app.use(routerEventos)
app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado en el puerto ${process.env.PORT}`);
});

export default app;
