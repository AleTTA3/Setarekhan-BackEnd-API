const express = require('express');
const mongoose = require('mongoose');

const userRoutes= require('./routes/user-routes');
const bookRoutes = require('./routes/book');
const reviewRoutes = require('./routes/review');

const app = express();
app.use(express.json());
app.use('/kaka',userRoutes);
app.use('/kaka',bookRoutes);
app.use('/kaka',reviewRoutes);
app.get('/',(req,res)=>{
    res.send("hello world!!");
})
mongoose
    .connect('mongodb://127.0.0.1:27017/Bookrecommendtion')
    .then(() => {
        app.listen(8000);
        console.log('connected');
    })
    .catch((err) => {
        console.log(err);
    })