const express = require('express')
const jwt = require('jsonwebtoken')


const SERVER_PORT = 5000


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