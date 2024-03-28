import homeScreenDataService from '../services/homeScreenDataService';

const homeScreenDataUtility = (callBackMethod) => {

  const promise = homeScreenDataService();
  promise.then((response) => {
    console.log(response.data);
    callBackMethod(response.data);
  }).catch((error) => {
    callBackMethod("failed");
  })
}

export default homeScreenDataUtility;

