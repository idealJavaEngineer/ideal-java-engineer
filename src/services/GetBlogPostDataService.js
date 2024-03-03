import axios from 'axios';


export const getBlogPost = (blogId) => {
    return axios.get(`http://localhost:8080/blog-post/${blogId}`);
}

const getfilteredBlogByTagService = (tagId) => {
    return axios.get(`http://localhost:8080/category/tag/${tagId}`)
}

export default getBlogPost;