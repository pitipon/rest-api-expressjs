
import Model from '../model'
import brcypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import config from '../../config'

const Users = {
    ...Model,
    key: 'users',
    permittedAttrs: ['email'],

    create(email, password) {
        return new Promise((resolve, reject) => {

            // brcrpt password , security 12 round
            brcypt.hash(password, 12, (err, hash) => {
                // if err , reject promise and return err
                if(err) return reject(err)

                // get currect collection
                const collection = this.collection()

                // set user data 
                const user = {
                    id: collection.length + 1,
                    email,
                    password: hash,
                    isAdmin: false
                }
    
                // add user data to collection
                this.setCollection([...collection, user])

                // success return user
                return resolve(user)
            })

        })
        
    },

    genToken(user) {
        // create jasonWebToken .. expire in one hour
        return jwt.sign({sub: user.id}, config.secretKey , {expiresIn: '1h'})
    },

    findByEmail(email) {
        return this.collection().find(user => user.email === email)
    },

    verify(user, password) {
        return new Promise((resolve, reject) => {
            // get user's hash
            const hash = user.password

            // plain password from user pass to bcrypt .. and compare with user hash
            brcypt.compare(password, hash, (err, isValid) => {
                if(err) return reject(err)
                return resolve(isValid)
            })
        })
    }

    
}

export default Users