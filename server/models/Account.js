import mongoose from "mongoose";



const AccountSchema = new mongoose.Schema(
    {
        user_email: {

            type: String,
            required: true
        },
        user_login: {
            type: String,
            require: true
        },
        user_password: {
            type: String,
            required: true

        },
    },
    {
        timestamps: true,
    }
)


export default mongoose.model('AccountModel', AccountSchema)