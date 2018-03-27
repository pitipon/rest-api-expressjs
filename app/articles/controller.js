import { Articles } from '../articles'

const ArticlesController = {
    getAll(req, res) {
        res.json({ 
            articles: Articles.findAll() 
        })
    },

    get(req, res) {
        res.json({ 
            articles: Articles.find(req.params.id)
        })
    },

    create(req, res) {

    },

    update(req, res) {

    },

    destroy(req, res) {

    }
}

export default ArticlesController