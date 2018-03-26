import db from '../../db'

const Users = {

    // find user in db
    findAll() {
        return db.users
    }
}

export default Users