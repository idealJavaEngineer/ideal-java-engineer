import axios from "axios";

const getInitialDataForCategoryScreen = (requestData) => {

  return axios.post(`http://localhost:8080/category/info` ,requestData);
} 


export default getInitialDataForCategoryScreen;