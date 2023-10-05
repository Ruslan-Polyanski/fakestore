import style from './style.module.css';
import { Slider } from '@mui/material';

const Filters = () => {
  return (
    <div className={style.box}>
      <div>
        <div className={style.slider}>
          <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
        </div>
        <div className={style.title}>Limits</div>
      </div>
    </div>
  )
};

export { Filters }