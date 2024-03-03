import getInitialDataForCategoryScreen from "../services/categoryScreenDataService"


const getInitialDataForCategoryUtility = (requestData, callBackFunction) => {
  
  const promise = getInitialDataForCategoryScreen(requestData);
  promise.then((response) => {
    callBackFunction(response.data);
  })
  .catch((error) => {
    callBackFunction("failure");
  })
} 

export default getInitialDataForCategoryUtility;