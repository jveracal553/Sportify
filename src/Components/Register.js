import soccer from './images/soccer.jpg';
import './Register.css';

export default function Register() {
  return (
    <div className='register'>
      <div className='register-text'>
        <div className='register-text__logo'>
          <i className='fas fa-futbol'></i>
          <button className='register-text__logo-name color'>Sportify</button>
        </div>
        <a className='register-text__begin link color' href='#'>
          Volver a iniciar sesión
        </a>
        <div className='register-text__info'>
          <p className='register-text__info-title'>Bienvenido a Sportify</p>
          <form className='register-text__info-form'>
            <div className='register-text__info-form-names'>
              <input
                className='register-text__info-form-name input'
                type='text'
                placeholder='Nombres'
              ></input>
              <input
                className='register-text__info-form-lastname input'
                type='text'
                placeholder='Apellidos'
              ></input>
            </div>
            <input
              className='register-text__info-form-email input'
              type='email'
              placeholder='Correo electrónico'
            ></input>
            <input
              className='register-text__info-form-email input'
              type='email'
              placeholder='Correo electrónico'
            ></input>
            <input
              className='register-text__info-form-password input'
              type='password'
              placeholder='Contraseña'
            ></input>
          </form>
        </div>
        <button className='register-text__button'>Ingresar</button>
      </div>
      <div className='register-image'>
        <img className='soccer' src={soccer} alt='' />
      </div>
    </div>
  );
}
