const UsersSerializer = {
    for(method, resource) {
        return this[method](resource)
    },

    get(resource) {
        const { id, email, isAdmin } = resource
        return { id, email, isAdmin }
    }
}

export default UsersSerializer