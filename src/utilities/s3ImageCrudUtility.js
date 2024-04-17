import {uploadCoverImageService,loadBlogCoverImageService} from '../services/s3imageCrudService';

export const uploadCoverImageUtility = (blogId, file, callBackFunction) => {
  console.log(blogId, file);
  const promise = uploadCoverImageService(blogId, file);
  promise.then((response) => {
    callBackFunction(response.data);
  }) 
  .catch((error) => {
    callBackFunction('failed')
  }) 
}

export const loadCoverImageUtility = (fileName) => {
  const promise = loadBlogCoverImageService(fileName);
  promise.then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log("is image loaded")
  })
}
