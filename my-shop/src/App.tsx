import React from 'react';
import './App.css';
import { ButtonLoginForm } from './components/form/loginForm';
import { LogOut } from './components/button/logOut';
import { Preloader } from './features/preloader';
import { useSelector } from 'react-redux';
import { RootState } from './store';

const selectorPreloader = (state: RootState) => state.preloader.isPreloader;

const App = () => {
  const isPreloader = useSelector(selectorPreloader);

  if( isPreloader ) {
    return <Preloader />
  } 

  return (
    <>
      <header className='header'>
        <div className='logo'>Logo</div>
        <LogOut />
        <ButtonLoginForm />
      </header>
      <div>Text</div>
      <footer>copyright ©</footer>
    </>
  )
  
}

export default App;
