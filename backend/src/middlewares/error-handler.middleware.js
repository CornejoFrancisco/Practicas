import ValidationError from "sequelize"
import { ResourceNotFound } from "../errors/resource-not-found.error.js";

const handlerError = (err, req, res, next) => {
  console.error(`Ocurrio un error durante ${req.url}`, err.message);
  console.error(`res.headersSent ${req.url}`, res.headersSent);
  if (res.headersSent) {
    return next(err)
  }
  if (err instanceof ResourceNotFound)
    return res.status(err.status).json({ error: err.message }) //sacar el return para ver que pasa
  if (err instanceof ValidationError) {
    return res.status(400).json({ error: err.message })
  }
  return res.status(500).json({ error: 'Error imprevisto. Intente nuevamente' })
}


export default handlerError;
