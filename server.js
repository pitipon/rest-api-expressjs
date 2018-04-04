import express from 'express'
import fs from 'fs'
import bodyParser from 'body-parser'
import config from './config'
import auth from './middlewares/auth'
import cors from 'cors'

const setupRoutes = (app) => {
    const APP_DIR = `${__dirname}/app`
    const features = fs.readdirSync(APP_DIR).filter(
        file => fs.statSync(`${APP_DIR}/${file}`).isDirectory()
    )

    features.forEach(feature => {
        const router = express.Router()
        const routes = require(`${APP_DIR}/${feature}/routes.js`)

        routes.setup(router)
        app.use(`/${feature}`, router) // /users
    })
}

    

const setup = () => {

        const app = express()
        const PORT = config.port

        app.use(auth)
        app.use(bodyParser.urlencoded({extended:true}))
        app.use(bodyParser.json())
        app.use(cors()) // solve problem "Access-Control-Allow-Origin"

        setupRoutes(app)
        // app.get('/', (req, res) => {
        //     res.send('Hello World')
        // })

        app.listen(PORT, () => 
            console.log('App listening on http://localhost:' + PORT)
        )
}

module.exports = {
    setup
}