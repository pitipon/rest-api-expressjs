import Users from './model' 

const UsersControllers = {
    getAll(req, res) {
        res.json({
            users: Users.findAll()
        })
    },

    get(req, res) {

    },

    create(req, res) {

    }
}

 export default UsersControllers