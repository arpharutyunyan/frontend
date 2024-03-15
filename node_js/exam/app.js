import express from "express";
import routes from "./routes/index.js";


const app = express();

app.use(express.urlencoded({
    limit: 1024 * 1024 * 10
}));

app.use(express.json({
    limit: 1024 * 1024 * 10
}));

app.use(routes);

app.listen(4000, 'localhost', () => {
    console.log('server work');
})