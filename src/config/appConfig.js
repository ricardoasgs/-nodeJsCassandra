import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const port = '3000';

const app = express();

app.listen(port);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

export default app;