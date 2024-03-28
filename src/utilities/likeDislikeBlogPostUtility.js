import {likeBlogPostService, dislikeBlogPostService} from '../services/likeDislikeBlogPostService'

export const likeBlogPostUtility = (blogId , callbackMethod) => {

    const promise = likeBlogPostService(blogId);
    promise.then((response) => {
        callbackMethod(response.data);
    })
    .catch((error) => {
        callbackMethod("failed");
    })
} 

export const dislikeBlogPostUtility = (blogId , callbackMethod) => {

  const promise = dislikeBlogPostService(blogId);
  promise.then((response) => {
      callbackMethod(response.data);
  })
  .catch((error) => {
      callbackMethod("failed");
  })
} 