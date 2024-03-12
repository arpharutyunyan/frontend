import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import sessionFileStore from "session-file-store";
import routes from "./routes/index.js";
import authorize from "./middlewares/authorize.js";
import test from './public/test.json' assert { type: "json" };

console.log(test)

const FileStore = sessionFileStore(session);

const app = express();

app.use(cookieParser());

app.use(session({
  secret: '12312312312h',
  store: new FileStore()
}));

app.use(express.urlencoded({
  limit: 1024 * 1024 * 10,
}));
app.use(express.json({
  limit: 1024 * 1024 * 10
}));
app.use(express.static('public'))

app.use(authorize)

app.use('/', routes);

app.use((req, res, next) => {
  next({
    message: 'not found',
    status: 404
  })
})

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    status: 'error',
    message: err.message,
    errors: err.errors,
    stack: err.stack
  })
})

app.listen(4000, () => {
  console.log('Server started')
})
