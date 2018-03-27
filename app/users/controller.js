import { Users } from '../users' 
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
        // const user = Users.create({ email: req.body.email })
        
        // res.json({
        //     user: user
        // })

        const { email, password } = req.body

        // return user as Promise .. (we use .then)
        Users.create(email, password).then(
            
            // return Gen JasonWebToken ... status 201 .. json response as user
            user => {
                res
                    .header(`Authorization`, `Bearer ${Users.genToken(user)}`)
                    .status(201)
                    .json({ user: UsersSerializer.for('create', user)}
                )
            }
        )
    }
}

 export default UsersControllers