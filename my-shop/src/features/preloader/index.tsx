import CircularProgress from '@mui/material/CircularProgress';
import style from './style.module.css';

const Preloader = () => {
  return (
    <div className={style.preloader}>
      <CircularProgress />  
    </div>
  )
};

export { Preloader }