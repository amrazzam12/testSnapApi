const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
app.use(express.json());
app.set('view engine', 'ejs');

//Database Connection
const mongoString = process.env.DATABASE_URL
mongoose.connect(mongoString);
const database = mongoose.connection
database.on('error', (error) => {
    console.log(error)
})
database.once('connected', () => {
    console.log('Database Connected');
})
// Database Connection


const articlesRouter = require('./routes/articles');
app.use('/articles', articlesRouter);

app.get('/', (req, res) => {
    res.json("Testing App")
});



app.listen(3000, () => "Servier Is Listening On Port 3000");