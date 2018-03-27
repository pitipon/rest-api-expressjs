import controller from './controller'

const setup = (router) => {

    router
        .get('/:id', controller.get)
        .get('/', controller.getAll)
        .post('/', controller.create)
        .patch('/:id', controller.update)
        .delete('/id', controller.destroy)
    
}

module.exports = {
    setup
}