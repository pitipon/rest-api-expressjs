require('dotenv').config()

export default  {
    perPage: process.env.perPage || 10,
    port: process.env.port || 3000,
    secretKey: process.env.SECRET_KEY || 'secret' 
}