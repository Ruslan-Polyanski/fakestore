import style from './style.module.css';
import { Slider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'; 
import { AppDispatch, RootState } from '../../store';
import { setLimitSliderData, setSortData } from './filters-slice';
import { useEffect, memo } from 'react';
import { Categories } from '../categories';
import { CheckboxCmponent } from '../../components/checkbox';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const allProducts = (state: RootState) => state.products;
const showFilters = (state: RootState) => state.filters.invisible;
const limitItems = (state: RootState) => state.filters.limitsSlider;
const sortData = (state: RootState) => state.filters.sort;

const Filters = () => {
  const dispatch: AppDispatch = useDispatch();
  const countProducts = useSelector(allProducts).length;
  const dataLimitItems = useSelector(limitItems);
  const inVisibleFilters = useSelector(showFilters);

  console.log('Filters')

  const onChangeLimitHandler = (event: Event, newValue: number | number[]) => {
    dispatch(setLimitSliderData(newValue as number))
  }

  useEffect(() => {
    setLimitSliderData(dataLimitItems)
  },[dataLimitItems])


  return (
    <div className={style.box}>
      <div className={style.box__filters}>
        <CheckboxCmponent />
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
        <div className={style.sort}>
          <BasicSelect />
        </div>
        <div className={style.cat}>
          <Categories />
        </div>
      </div>
    </div>
  )
};

const BasicSelect = memo(() => {
  const inVisibleFilters = useSelector(showFilters);
  const sort = useSelector(sortData)
  const dispatch: AppDispatch = useDispatch();

  console.log('BasicSelect')

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(setSortData(event.target.value))
  };

  return (
    <Box sx={{ minWidth: 170 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Сортировать</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sort}
          label="Сортировать"
          onChange={handleChange}
          disabled={inVisibleFilters}
        >
          <MenuItem value={'bottom'}>По убыванию</MenuItem>
          <MenuItem value={'top'}>По возростанию</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
})

export { Filters }