import axios from 'axios';

const homeScreenDataService = () => {
  return axios.get(`http://localhost:8080/home-screen`);

}

export default homeScreenDataService;