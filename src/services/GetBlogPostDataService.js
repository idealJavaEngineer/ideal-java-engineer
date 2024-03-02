import axios from 'axios';


export const getBlogPost = (blogId) => {
    return axios.get(`http://localhost:8080/blog-post/${blogId}`);
}

export default getBlogPost;