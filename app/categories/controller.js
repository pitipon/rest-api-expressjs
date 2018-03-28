import { Categories } from '../categories'

const CategoriesController = {
    getAll(req, res) {
        res.json({ categories: Categories.findAll() })
    }
}

export default CategoriesController