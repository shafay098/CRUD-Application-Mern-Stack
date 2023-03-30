import express from "express";
import dotenv from 'dotenv'
import cors from 'cors';
import bodyParser from "body-parser";

import Connection from "./database/database.js";
import Routes from "./routes/route.js";

const app = express();

app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))

app.use(cors());

app.use('/',Routes)

const port = 8000;

dotenv.config()
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD

Connection(username,password);

app.listen(port,()=>console.log(`server is running succesfully on port ${port}` ))