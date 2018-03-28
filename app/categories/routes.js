import controller from './controller'

const setup = (router) => {
    router.get('/', controller.getAll)
}

module.exports = {
    setup
}