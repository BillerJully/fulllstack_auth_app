// const express = require('express')
// const jwt = require('jsonwebtoken')
// const mongoose = require('mongoose')
// require('dotenv').config()
import express  from 'express'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
import "dotenv/config.js"
import {accountCreateValidator} from './validation/auth.js'
import { validationResult } from 'express-validator'
import AccountModel from './models/Account.js'
import bcrypt from 'bcrypt'

// const SERVER_PORT = 5000
// const DB_URL = 'mongodb+srv://admin:admin@publicappcluster.csacns5.mongodb.net/?retryWrites=true&w=majority'


mongoose
    .connect(process.env.DB_URL)
    .then(()=> console.log('MongoDB database connetcted'))
    .catch((err)=> {
        console.log('MongoDB database connection failed')
        console.log('\n'  + err)
})

const app = express()
app.use(express.json())

const start = async () =>{
    try {

        app.get('/', (req,res)=>{
            res.send("Server on work")

        })

        app.post('/user/create', accountCreateValidator, async (req, res)=>{

            const accountErrors = validationResult(req)
            if(!accountErrors.isEmpty()){
                return res.status(400).json(accountErrors.array())
            }
            const doc = new AccountModel({
                user_email: req.body.email,
                user_passwordHash: req.body.password
            })


            const account = await doc.save()
            res.json(account)
            
        })


        app.listen(process.env.SERVER_PORT, (err)=>{
            if(err){
                return console.log('server error' + err)
            }
            console.log(`Server started on PORT: ${process.env.SERVER_PORT}`)
        })
    } catch (err) {
        console.log(err)
        
    }
}



start()