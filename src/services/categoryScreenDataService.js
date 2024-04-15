import axios from "axios";

const getInitialDataForCategoryScreen = (requestData) => {

  return axios.post(`http://localhost:8080/category/info` ,requestData);
} 

export const getSearchBlogPostInfoService = (blogName) => {
  return axios.get(`http://localhost:8080/category/all-blogs-info/${blogName}`);
}


export default getInitialDataForCategoryScreen;