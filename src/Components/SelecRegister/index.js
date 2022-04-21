import React from 'react';
import {Link} from 'react-router-dom'

function SelecRegister() {
    return (
        <div>
            <Link to={'/register/user'} className='register-text__begin link color'>User</Link>
            <Link to={'/register/owner'} className='register-text__begin link color'>Owner</Link>
        </div>
    );
}

export default SelecRegister;