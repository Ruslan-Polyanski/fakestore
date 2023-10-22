import { memo } from "react";
import { useDispatch, useSelector } from 'react-redux'; 
import { AppDispatch, RootState } from '../../store';
import Checkbox from '@mui/material/Checkbox';
import { setVisibleFiltersData } from '../../features/filters/filters-slice';

const showFilters = (state: RootState) => state.filters.invisible;

const CheckboxCmponent = memo(() => {
  const dispatch: AppDispatch = useDispatch();
  const inVisibleFilters = useSelector(showFilters);

  const handleChangeVisibleFilters = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setVisibleFiltersData(!event.target.checked))
  };

  return (
    <Checkbox
      checked={!inVisibleFilters}
      onChange={handleChangeVisibleFilters}
      inputProps={{ 'aria-label': 'controlled' }} />
  )
})

export { CheckboxCmponent }