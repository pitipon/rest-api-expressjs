import Users from './model' 

const UsersControllers = {
    getAll(req, res) {
        res.json({
            users: Users.findAll()
        })
    },

    get(req, res) {
        res.json({
            user: Users.find(req.params.id)
        })
    },

    create(req, res) {
        const user = User.create({ email: req.body.email })
        
        res.json({
            user: user
        })
    }
}

 export default UsersControllers