const Finder = {
    // Example of use 
    // Articles.where({ authorId: 1, categoryId: 1 })
    where(conditions) {
        const collection = this.collection()

        return Object
            .keys(conditions) // ['authorId','categoryId']
            .reduce( 
                (results, key) => results.filter(item => item[key] == conditions[key])
            , collection)
            // initial results is collection or all articles
            // Filter all articles with key ['authorId','categoryId']
    },

    findAll() {
        return this.collection()
    },

    find(id) {
        return this.collection().find(record => record.id === +id)
    },

    findIndex(id) {
        return this.collection().findIndex(record => record.id === +id)
    }

}

export default Finder