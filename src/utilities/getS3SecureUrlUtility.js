import getS3SecureUrlService from "../services/getS3SecureUrlService";


const getS3SecureUrlUtility = (userId, callBackFunction) => {

    const promise = getS3SecureUrlService(userId);
    promise.then((response) => {
        callBackFunction(response.data);
    })
    .catch((erro) => {
        console.log(error);
    })
}
export default getS3SecureUrlUtility;