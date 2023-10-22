import { ButtonLoginForm } from '../form/loginForm';
import { LogOut } from '../button/logOut';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import style from './style.module.css';
import { Link } from 'react-router-dom';

const selectorIsLogin = (state: RootState) => state.user.status;

const Header = () => {
  const buttonLogin = useSelector(selectorIsLogin);

  console.log('Header')

  return (
    <header className={style.header}>
      <Link to='/' className={style.logo}>Logo</Link>
      {buttonLogin ? <LogOut /> : <ButtonLoginForm />}
    </header>
  )
};

export { Header }