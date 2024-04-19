import {uploadBlogPost} from '../services/uploadBlogPostService';

const UploadBlogPostUtility = (userId, blogData , getResponse) => {

    const promise = uploadBlogPost(userId, blogData);
    promise.then((response) => {
        getResponse(response.data);
    })
    .catch((error) => {
        getResponse('failure');
    })
} 

export default UploadBlogPostUtility;