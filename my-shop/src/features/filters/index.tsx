import style from './style.module.css';
import { Slider } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from 'react-redux'; 
import { AppDispatch, RootState } from '../../store';
import { setVisibleFiltersData, setLimitSliderData } from './filters-slice';
import { useEffect } from 'react';

const allProducts = (state: RootState) => state.products;
const showFilters = (state: RootState) => state.filters.invisible;
const limitItems = (state: RootState) => state.filters.limitsSlider;

const Filters = () => {
  const dispatch: AppDispatch = useDispatch();
  const countProducts = useSelector(allProducts).length;
  const inVisibleFilters = useSelector(showFilters);
  const dataLimitItems = useSelector(limitItems);


  const handleChangeVisibleFilters = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setVisibleFiltersData(!event.target.checked))
  };

  const onChangeLimitHandler = (event: Event, newValue: number | number[]) => {
    dispatch(setLimitSliderData(newValue as number))
  }

  useEffect(() => {
    setLimitSliderData(dataLimitItems)
  },[dataLimitItems])


  return (
    <div className={style.box}>
      <div className={style.box__filters}>
        <Checkbox
              checked={!inVisibleFilters}
              onChange={handleChangeVisibleFilters}
              inputProps={{ 'aria-label': 'controlled' }} />
        <p>Show filters</p>
        <div className={style.slider}>
          <Slider 
              min={0} 
              max={countProducts} 
              value={dataLimitItems}
              onChange={onChangeLimitHandler}
              disabled={inVisibleFilters}
              aria-label="Default" 
              valueLabelDisplay="auto" />
        </div>
      </div>
    </div>
  )
};

export { Filters }