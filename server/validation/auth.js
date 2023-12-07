import { body } from 'express-validator'

export const accountCreateValidator = [
    body('email').isEmail(),
    body('password').isLength({min: 5}),

]




