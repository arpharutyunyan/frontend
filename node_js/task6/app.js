import express from "express";
import routes from "./routes/index.js";
import HttpErrors from "http-errors";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(cors())
app.use(morgan('dev'))
app.use(express.urlencoded({
  limit: 1024 * 1024 * 10,
}));
app.use(express.json({
  limit: 1024 * 1024 * 10
}));
app.use(express.static('public'))

app.use(routes);

app.use((req, res, next) => {
  next(HttpErrors(404))
})

app.use((err, req, res, next) => {
  err.status = err.status || 500
  res.status(err.status);

  if (err.status >= 500) {
    console.error(err)
  }
  res.json({
    status: 'error',
    message: err.message,
    errors: err.errors,
    stack: err.stack
  })
})

app.listen(4000, 'localhost', () => {
  console.log('server work');
})
