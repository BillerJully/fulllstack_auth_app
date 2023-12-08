import express  from 'express'
import jwt from 'jsonwebtoken'


import { validationResult } from 'express-validator'
import AccountModel from '../models/Account.js'
import bcrypt from 'bcrypt'



export const accountCreator = async (req, res) => {
    try {
        const accountErrors = validationResult(req)
        if(!accountErrors.isEmpty()){
            return res.status(400).json(accountErrors.array())
        }

        const doc = new AccountModel({
            user_email: req.body.email,
            user_password: req.body.password,
            user_login: req.body.login
        })

        const account = await doc.save()

        const token = jwt.sign({
            _id: account._id,
        }, 'secretkey', {expiresIn: '30d'})
        res.json({...account._doc, token})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Creation failed!"})
    }
}

export const accountLoginer = async (req, res) => {
    try {
        const account = await AccountModel.findOne({user_email: req.body.email})

        if(!account) {
            return res.status(404).json({message: "User not found!"})
        }

        // const isPassword = await bcrypt.compare(req.body.password, account._doc.password)

        // if(!isPassword) {
        //     return res.status(404).json({message: "Password is not correct!"})
        // }
        const password = await AccountModel.findOne({user_password: req.body.password})

        if(!password) {
            return res.status(404).json({message: "Wrong password!"})
        }
        
        const token = jwt.sign({
            _id: account._id,
        }, 'secretkey', {expiresIn: '30d'})
        res.json({...account._doc, token})

    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Login error!"})
    }
}



export const accountPage = async (req, res) => {

    try {
        const account = await AccountModel.findById(req.accountId)

        if(!account) {
            return res.status(404).json({
                message: "User not found on mypage"
            })
        }
        res.json({...account._doc})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "No info error!"})
    }
}