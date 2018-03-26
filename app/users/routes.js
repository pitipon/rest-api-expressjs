

const setup = (router) => {
    
    router.get('/', (req, res) => {
        res.send("Hello World")
    }) // .get('/users')
    
}

module.exports = {
    setup
}