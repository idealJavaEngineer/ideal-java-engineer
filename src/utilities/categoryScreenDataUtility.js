import getInitialDataForCategoryScreen, {getSearchBlogPostInfoService} from "../services/categoryScreenDataService"


const getInitialDataForCategoryUtility = (requestData, callBackFunction) => {
  
  const promise = getInitialDataForCategoryScreen(requestData);
  promise.then((response) => {
    callBackFunction(response.data);
  })
  .catch((error) => {
    callBackFunction("failure");
  })
} 

export const getSearchBlogPostInfoServiceUtility = (blogName, callBackFunction) => {
  
  const promise = getSearchBlogPostInfoService(blogName);
  promise.then((response) => {
    callBackFunction(response.data);
  })
  .catch((error) => {
    callBackFunction("failure");
  })
}

export default getInitialDataForCategoryUtility;