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
        const article = Articles.create(req.body)
        res.json({
            articles: article
        })
    },

    update(req, res) {
        const article = Articles.update(req.params.id, req.body)
        res.json({
            articles: article
        })
    },

    destroy(req, res) {
        console.log("destroy")
        Articles.destroy(req.params.id)
        res.json({
            articles: "ok"
        })
    }
}

export default ArticlesController