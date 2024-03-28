import axios from 'axios';

export const likeBlogPostService = (blogId) => {
  return axios.post(`http://localhost:8080/blog-post/like/${blogId}`);

}

export const dislikeBlogPostService = (blogId) => {
  return axios.post(`http://localhost:8080/blog-post/dislike/${blogId}`);
}

export default likeBlogPostService;