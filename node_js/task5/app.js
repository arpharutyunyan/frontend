import express from "express";
import routes from "./routes/index.js";


const app = express();

app.use(routes);

app.listen(4000, 'localhost', () => {
    console.log('server work');
})