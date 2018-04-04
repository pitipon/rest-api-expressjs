require('dotenv').config()

export default  {
    perPage: process.env.perPage || 10,
    port: process.env.port || 8080,
    secretKey: process.env.SECRET_KEY || 'secret' 
}