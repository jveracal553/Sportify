import React from 'react';
import {Link} from 'react-router-dom'
import './SelecRegister.css';
import soccer from '../../images/soccer.jpg';

function SelecRegister() {
    return (
        <div className='register'>
        <div className='register-text'>
            <div className='register-text__logo'>
                <i className='fas fa-futbol'></i>
                <Link to={'/'} className='register-text__logo-name color'>Sportify</Link>
            </div>
            <div><Link to={'/register/owner'} className='register-text__logo link color'>Soy un Propietario</Link></div>
            <div><Link to={'/register/user'} className='register-text__logo link color'>Soy un Usuario</Link></div>
            
        </div>
        <div className='register-image'>
            <img className='soccer' src={soccer} alt='' />
        </div>
    </div>
    );
}

export default SelecRegister;