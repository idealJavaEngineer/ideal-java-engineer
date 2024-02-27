import axios from "axios";

export const AdminLoginService = (credentials) => {
    
    return axios.post('http://localhost:8080/admin/login', credentials);
}
