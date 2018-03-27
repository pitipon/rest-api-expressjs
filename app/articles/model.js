import Model from '../model'

const Article = {
    ...Model,
    key: 'articles',
    permittedAttrs: ['title', 'content', 'authorId']
}

export default Article