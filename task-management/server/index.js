/**
 * Your server comes here
 */

import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors';
import connection from '../server/db/index.js'


const app = express();

app.use(bodyParser.json({limit : "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit : "30mb",extended: true}));

app.use(cors());

const PORT = process.env.PORT || 8000;


connection
    .then(()=> app.listen(PORT, ()=> console.log(`server is running on port:${PORT}`)))
    .catch((error)=> console.log(error.message));




