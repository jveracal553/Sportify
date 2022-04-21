import React from 'react';
import {Link} from 'react-router-dom'

function SelecLogin() {
    return (
        <div>
            <Link to={'/login/user'} className='register-text__begin link color'>User</Link>
            <Link to={'/login/owner'} className='register-text__begin link color'>Owner</Link>
        </div>
    );
}

export default SelecLogin;