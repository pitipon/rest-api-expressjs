import Users from './model' 
import UsersSerializer from './serializer'

const UsersControllers = {
    getAll(req, res) {
        res.json({
            users: Users.findAll()
        })
    },

    get(req, res) {
        res.json({
            user: UsersSerializer.for('get', Users.find(req.params.id))
        })
    },

    create(req, res) {
        const user = Users.create({ email: req.body.email })
        
        res.json({
            user: user
        })
    }
}

 export default UsersControllers