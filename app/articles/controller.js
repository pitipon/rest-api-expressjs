import { Articles } from '../articles'
import ArticlesPolicy from './policy'

const ArticlesController = {
    getAll(req, res) {
        console.log(req.user)
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
        if(ArticlesPolicy.for('create', req.user)) {
            const article = Articles.create(req.body)
            res.json({
                articles: article
            })
        } else {
            res
                .status(401)
                .json({
                    erros: ['You are not allowed to create the article.']
                })
        }

        
    },

    update(req, res) {
        const id = req.params.id
        console.log('controller(update) ----')
        console.log(req.user)

        if(ArticlesPolicy.for('update', req.user, Articles.find(id))) {
            const article = Articles.update(id, req.body)
            res
                .status(200)
                .json({ articles: article })
        } else {
            res
                .status(401)
                .json({ errors: ['Not allow update']})
        }

      
    },

    destroy(req, res) {
        console.log("destroy")

        const id = req.params.id

        if(ArticlesPolicy.for('destroy', req.user, Articles.find(id))) {
            Articles.destroy(req.params.id)
            res.json({
                articles: "deleted"
            })
        } else {
            res
            .status(401)
            .json({ errors: ['Not allow delete']})
        }

        
    }
}

export default ArticlesController