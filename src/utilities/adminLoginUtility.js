import {AdminLoginService} from "../services/adminLoginService";


const AdminLoginUtility = (userName, password, callBackFunction) => {

    const creadentials = {
        userName : userName,
        password : password
    };
    const promise = AdminLoginService(creadentials);
    promise.then((response) => {
        callBackFunction(response.data);
    })
    .catch((error) => {
        callBackFunction('failure');
    })
}

export default AdminLoginUtility;