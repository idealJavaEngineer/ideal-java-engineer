import axios from "axios";

export const uploadCoverImageService = (blogId, file) => {
  const formData = new FormData();
  formData.append("file",file);
  return axios({
    method : 'post',
    url : `http://localhost:8080/aws-s3/credentials/upload-file/${blogId}` ,
    data : formData,
    headers: {
      "content-type": "multipart/form-data"
    }
  });
}

export const loadBlogCoverImageService = (fileName) => {
  return axios.get(`http://localhost:8080/aws-s3/credentials/view-file/${fileName}`)
}