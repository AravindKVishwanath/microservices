import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import {createUser,getUsers} from './controllers/userController.js'

const app = express()

app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/users',
    {useNewUrlParser:true, useUnifiedTopology:true}
)

app.post('/users',createUser)
app.get('/users',getUsers)

app.listen(3000,()=>{
    console.log("User service on port 3000")
})