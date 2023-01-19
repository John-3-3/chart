//  REST API 
const express = require('express');
const app = express();
const pool = require('./DB/db');

app.use(cors());
app.use(express.json());

app.post('/chart', async(req, res)=>{
    try {
        //const {firstName, lastName, email, opinion}
        
    } catch (error) {
        console.log(error.message);
    }
});
