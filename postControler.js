const posts = [
    {id: 1, title: 'Post One' },
    {id: 2, title: 'Post Two' }
]

// exportred fucntion return posts above.
const getPosts = () => posts;

export default getPosts;


export const getPostLength = () => posts.length;