
const express = require('express')
const app = express()
const routes = require('./routes')
const mongoose = require("mongoose")
const cors = require("cors");

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoose.connect('mongodb+srv://Kueakun:Aa_1250101508286@cluster0.htr4xsn.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser: true}).then(()=>{
    console.log('Database connected')
})

app.use('/api', routes)

app.listen(process.env.PORT || 1000,()=>{
    console.log('Started server')
})