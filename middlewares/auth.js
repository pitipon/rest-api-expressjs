import jwt from 'jsonwebtoken' 
import config from '../config' // get secretKey from config
import { Users } from '../app/users'

export default function(req, res, next) {
    // get authorization from header
    const authHeader = req.header('Authorization')

    // check: Is there authHeader .. if nope -> call next middleware
    if(!authHeader) return next()

    // use regular expression to get accessToken
    const accessToken = authHeader.match(/Bearer (.*)/)[1]

    // use JasonWebtoken to verify accessToken
    jwt.verify(accessToken, config.secretKey, (err, decoded) => {
        // err -> call next middleware
        if(err) return next()

        // set req.user as User
        req.user = Users.find(decoded.sub)
        next() // call next middleware
    })
}