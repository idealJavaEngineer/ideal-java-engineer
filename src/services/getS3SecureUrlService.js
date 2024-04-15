import axios from 'axios';


const getS3SecureUrlService = (userId) => {

    return axios.get(`http://localhost:8080/aws-s3/credentials/${userId}`);
}

export default getS3SecureUrlService;