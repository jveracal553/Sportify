import {useState} from 'react'
import soccer from '../../images/soccer.jpg';
import './Register.css';
import {Link, useHistory} from 'react-router-dom'

export default function RegisterUser() {
  const [userState, setUser] = useState({});
  const history = useHistory()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...userState, [name]: value });
  };
  const submit = async(e)=>{
    e.preventDefault();
    await fetch('http://localhost:3001/api/user/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userState),
    });
    history.push('/login')
  }
  return (
    <div className='register'>
      <div className='register-text'>
        <div className='register-text__logo'>
          <i className='fas fa-futbol'></i>
          <Link to={'/'} className='register-text__logo-name color'>Sportify</Link>
        </div>
        <Link to={'/login'} className='register-text__begin link color'>Volver a iniciar sesión</Link>
        <div className='register-text__info'>
          <p className='register-text__info-title'>Bienvenido a Sportify</p>
          <form className='register-text__info-form' onSubmit={submit}>
            <div className='register-text__info-form-names'>
              <input
                name='name'
                className='register-text__info-form-name input'
                type='text'
                placeholder='Nombres'
                onChange={ handleChange}
              ></input>
              <input
                name='surname'
                className='register-text__info-form-lastname input'
                type='text'
                placeholder='Apellidos'
                onChange={ handleChange}
              ></input>
            </div>
            <input
              name='email'
              className='register-text__info-form-email input'
              type='email'
              placeholder='Correo electrónico'
              onChange={ handleChange}
            ></input>
            <input
              name='password'
              className='register-text__info-form-password input'
              type='password'
              placeholder='Contraseña'
              onChange={ handleChange}
            ></input>
            <input
              className='register-text__info-form-password input'
              type='password'
              placeholder='Confirmar contraseña'
            ></input>
            <button className='register-text__button' type='submit'>Ingresar</button>
          </form>
        </div>
      </div>
      <div className='register-image'>
        <img className='soccer' src={soccer} alt='' />
      </div>
    </div>
  );
}
