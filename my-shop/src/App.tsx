import React, { useEffect } from 'react';
import './App.css';
import { ButtonLoginForm } from './components/form/loginForm';
import { LogOut } from './components/button/logOut';
import { Preloader } from './features/preloader';
import { getAuthorization } from './features/preloader/preloader-slice';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from './store';
import { Products } from './features/products';


const selectorPreloader = (state: RootState) => state.preloader.isPreloader;
const selectorIsLogin = (state: RootState) => state.user.status;

const App = () => {
  const isPreloader = useSelector(selectorPreloader);
  const buttonLogin = useSelector(selectorIsLogin);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getAuthorization())
  }, [dispatch])

  if( isPreloader ) {
    return <Preloader />
  } 

  return (
    <>
      <header className='header'>
        <div className='logo'>Logo</div>
        {buttonLogin ? <LogOut /> : <ButtonLoginForm />}
      </header>
      <Products />
      <div>Text</div>
      <footer>copyright ©</footer>
    </>
  )

}

export default App;
