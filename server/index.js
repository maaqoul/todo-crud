const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const routes = require('./routes/todo')
require('dotenv').config();

const mongoString = process.env.DATABASE_URL
const app = express()
const port = 3001

mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.use(cors())
app.use(express.json())
app.use("/api", routes)

app.get("/", (req, res) => {
    res.send('hello world')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)})