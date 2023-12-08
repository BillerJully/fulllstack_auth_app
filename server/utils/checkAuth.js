import jwt from "jsonwebtoken";


export default (req, res, next) => {


    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '')

    if(token) {
        try {
            const decoded = jwt.verify(token, 'secretkey')
            req.accountId = decoded._id
            next()
        } catch (error) {
            console.log(error)

            return res.status(403).json({message: 'Error of decode'})
        }
    } else {
        return res.status(403).json({message: 'Error of access'})
    }


}