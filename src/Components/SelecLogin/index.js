import React from 'react';
import {Link} from 'react-router-dom'
import soccer from '../../images/soccer.jpg';
import './SelecLogin.css';

function SelecLogin() {
    return (
        <div className='register'>
            <div className='register-text'>
                <div className='register-text__logo'>
                    <i className='fas fa-futbol'></i>
                    <Link to={'/'} className='register-text__logo-name color'>Sportify</Link>
                </div>
                <div><Link to={'/login/owner'} className='register-text__logo link color'>Soy un Propietario</Link></div>
                <div><Link to={'/login/user'} className='register-text__logo link color'>Soy un Usuario</Link></div>
                
            </div>
            <div className='register-image'>
                <img className='soccer' src={soccer} alt='' />
            </div>
        </div>
    );
}

export default SelecLogin;