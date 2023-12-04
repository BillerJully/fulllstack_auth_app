const express = require('express')



const SERVER_PORT = 5000


const app = express()

const start = async () =>{
    try {
        app.listen(SERVER_PORT, ()=>{
            console.log(`Server started on PORT: ${SERVER_PORT}`)
        })
    } catch (error) {
        console.log(error)
        
    }
}



start()