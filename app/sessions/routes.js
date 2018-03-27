import controller from './controller'

const setup = (router) => {
    router.post('/', controller.create)
}

module.exports = {
    setup
}