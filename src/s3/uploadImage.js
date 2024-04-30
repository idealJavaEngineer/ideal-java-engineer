import React, {useState} from "react";
import getS3SecureUrlUtility from '../utilities/getS3SecureUrlUtility';

const [s3Credential,setS3Credentials] = useState({});

export const getSecureUrl = (userId) => {
    getS3SecureUrlUtility(userId, s3CredentialCallBackMethod);
    return s3Credential;
}

const s3CredentialCallBackMethod = (response) => {
    console.log(response);
    setS3Credentials(response);
}

export default getSecureUrl;

