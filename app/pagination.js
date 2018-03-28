import config from '../config'

const Pagination = {
    paginate(conditions, page = 1, perPage = config.perPage) {
        // this.where(conditions) from Finder.js
        const queryResults = this.where(conditions)

        return {
            [this.key]: queryResults.slice((page - 1) * perPage, page * perPage),
            meta: {
                page: +page,
                perPage: +perPage,
                totalPages: Math.ceil(queryResults.length / perPage)
            }
        }
    }
}

export default Pagination