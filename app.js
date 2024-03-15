require('dotenv').config();

const express=require('express')
const cors=require("cors")  //cors meaning cross origin  like frontend is on laptop ,database is on aws so to have a connection between them we use cors

const connectToDb=require('./config/db.js')

const app=express();


//Express middleware
app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use(cors())

//int connection to db
connectToDb()

const userRoutes=require('./routes/userRoutes.js')


app.use('/',userRoutes);

module.exports=app;