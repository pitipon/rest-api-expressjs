import Policy from '../policy'

const ArticlesPolicy = {
    ...Policy,

    create(user) {
        // check that user existing in db
        return !!user
    },

    update(user, article) {
        console.log("update")
        console.log(`user id: ${user}, author id: ${article.authorId}`)
        return user && user.id === article.authorId
    },

    destroy(user, article) {
        return user && (user.isAdmin || user.id === article.authorId)
    }
}

export default ArticlesPolicy