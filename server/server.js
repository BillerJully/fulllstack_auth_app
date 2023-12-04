const express = require('express')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')


const SERVER_PORT = 5000
const DB_URL = 'mongodb+srv://admin:admin@publicappcluster.csacns5.mongodb.net/?retryWrites=true&w=majority'


mongoose
    .connect(DB_URL)
    .then(()=> console.log('MongoDB database connetcted'))
    .catch(()=> console.log('MongoDB database connection failed'))

const app = express()
app.use(express.json())

const start = async () =>{
    try {

        app.get('/', (req,res)=>{
            res.send("Server on work")

        })



        app.post('/user/login', (req, res)=>{
            console.log("ERROR")
            console.log(req.body)
            const usertoken = jwt.sign({
                password: req.body.password,
            }, '3')
            console.log("ERROR")
            res.json({
                status: true,
                usertoken,

            })
        })


        app.listen(SERVER_PORT, (err)=>{
            if(err){
                return console.log('server error' + err)
            }
            console.log(`Server started on PORT: ${SERVER_PORT}`)
        })
    } catch (err) {
        console.log(err)
        
    }
}



start()