import soccer from './images/soccer.jpg';
import './Login.css';

export default function Login() {
  return (
    <div className='login'>
      <div className='login-text'>
        <div className='login-text__logo'>
          <i className='fas fa-futbol'></i>
          <button className='login-text__logo-name color'>Sportify</button>
        </div>
        <a className='login-text__begin link color' href='#'>
          Volver al inicio
        </a>
        <div className='login-text__info'>
          <p className='login-text__info-title'>
            Bienvenido a <br /> Sportify
          </p>
          <form className='login-text__info-form'>
            <input
              className='login-text__info-form-email'
              type='text'
              placeholder='Ingresa tu correo'
            ></input>
            <input
              className='login-text__info-form-password'
              type='password'
              placeholder='Ingresa tu contraseña'
            ></input>
          </form>
        </div>
        <button className='login-text__button'>Ingresar</button>
        <div className='login-text__register small'>
          <p>¿No tienes una cuenta?</p>
          <a className='login-text__register-link link small color' href='#'>
            Regístrate aquí
          </a>
        </div>
      </div>
      <div className='login-image'>
        <img className='soccer' src={soccer} alt='' />
      </div>
    </div>
  );
}
