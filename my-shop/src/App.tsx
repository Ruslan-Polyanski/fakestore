import { useEffect } from 'react';
import { Preloader } from './features/preloader';
import { getAuthorization } from './features/preloader/preloader-slice';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from './store';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Outlet } from 'react-router-dom';


const selectorPreloader = (state: RootState) => state.preloader.isPreloader;

const App = () => {
  const isPreloader = useSelector(selectorPreloader);
  const dispatch: AppDispatch = useDispatch();

  console.log('App')

  useEffect(() => {
    dispatch(getAuthorization())
  }, [dispatch])

  if( isPreloader ) {
    return <Preloader />
  } 

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )

}

export default App;
