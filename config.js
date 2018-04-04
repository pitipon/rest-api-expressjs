console.log(process.env.SECRET_KEY)

export default  {
    perPage: 10,
    port: 3000,
    secretKey: process.env.SECRET_KEY || 'secret'
}