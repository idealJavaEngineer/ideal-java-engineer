import axios from 'axios';


export const uploadBlogPost = (userId, blogData) => {

    const requestData = {
        ...blogData,
        userId : userId
    };
    return axios.post(`http://localhost:8080/admin/upload-blog` ,requestData);
}