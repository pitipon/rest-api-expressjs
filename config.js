console.log(process.env.SECRET_KEY)

export default  {
    port: 3000,
    secretKey: process.env.SECRET_KEY
}