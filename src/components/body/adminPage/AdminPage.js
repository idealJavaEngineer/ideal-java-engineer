import React, {useState} from 'react';
import CustomTextEditor from '../textEditor/CustomTextEditor';
import AdminLoginPage from './AdminLoginPage'

function AdminPage() {
   
    const [isLoggedIn, setisLoggedIn] = useState(false);
    return (
        <div>
            { isLoggedIn ? <CustomTextEditor /> : <AdminLoginPage setisLoggedIn={setisLoggedIn}/> }
        </div>
    )
    
}

export default AdminPage;