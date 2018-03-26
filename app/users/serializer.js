import Serializer from '../serializer'

const UsersSerializer = {
    ...Serializer,

    get(resource) {
        const { id, email, isAdmin } = resource
        return { id, email, isAdmin }
    }
}

export default UsersSerializer