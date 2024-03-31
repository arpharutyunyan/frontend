import express from "express";
import HttpErrors from "http-errors";
import cors from "./middlewares/cors.js";
import Socket from "./services/Socket.js";

const app = express();

app.use(cors)
app.use(express.urlencoded({
    limit: 1024 * 1024 * 10,
}));
app.use(express.json({
    limit: 1024 * 1024 * 10
}));

app.use((req, res, next) => {
    next(HttpErrors(404))
})

const server = app.listen(4000, 'localhost', () => {
    console.log('server work');
})

Socket.init(server);
