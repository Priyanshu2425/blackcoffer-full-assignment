require('dotenv').config();
const express = require("express");
const cors = require('cors');

//db models
const { JSONDATA } = require('../db');

//routers
const { FilterRouter } = require('./routes/filterRoutes');
const { DataRouter } = require('./routes/dataRoutes');
 
const app = express();
app.use(cors());
app.use('/filters', FilterRouter);
app.use('/data', DataRouter);

app.get('/', (req, res)=>{
    res.send('home');
})

const PORT = 3000;
app.listen(PORT, ()=>{ 
    console.log("Server ready on port "+ PORT);
});

module.exports = app;
