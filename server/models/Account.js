import mongoose from "mongoose";



const AccountSchema = new mongoose.Schema(
    {
        user_email: {

            type: String,
            required: true
        },
        user_passwordHash: {
            type: String,
            required: true

        },
    },
    {
        timestamps: true,
    }
)


export default mongoose.model('AccountModel', AccountSchema)