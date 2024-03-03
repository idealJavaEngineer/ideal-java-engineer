import {getBlogPost} from '../services/GetBlogPostDataService';

const GetBlogPostDataUtility = (blogId , getResponse) => {

    const promise = getBlogPost(blogId);
    promise.then((response) => {
        getResponse(response.data);
    })
    .catch((error) => {
        getResponse("failed");
    })
} 

export default GetBlogPostDataUtility;