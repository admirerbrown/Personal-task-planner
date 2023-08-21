const express = require('express');
const cors = require('cors');
const connectDb = require('./Config/db');
const dotenv = require('dotenv');

//load config
dotenv.config({path: './Config/config.env'});

connectDb();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());



app.listen(PORT, ()=>{
    console.log(`Server running in ${process.env.NODE_ENV} mode on port: ${PORT}`)
})