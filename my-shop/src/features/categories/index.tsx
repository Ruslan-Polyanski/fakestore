import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux'; 
import { AppDispatch, RootState } from '../../store';
import { useEffect, useId, memo } from 'react';
import { setCategoriesData } from './categories-slice';
import { setCategoryData } from '../filters/filters-slice';


const showFilters = (state: RootState) => state.filters.invisible;
const getCategories = (state: RootState) => state.categories;
const getCategory = (state: RootState) => state.filters.category;


const Categories = memo(() => {

  const inVisibleFilters = useSelector(showFilters);
  const dispatch: AppDispatch = useDispatch();
  const categories = useSelector(getCategories);
  const category = useSelector(getCategory);
  const id = useId();

  console.log(category)

  useEffect(() => {
    dispatch(setCategoriesData())
  }, [dispatch])

  const handleChange = (event: SelectChangeEvent) => {
      dispatch(setCategoryData(event.target.value))
  };

  return (
    <Box sx={{ minWidth: 170 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Категории</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Категории"
          onChange={handleChange}
          disabled={inVisibleFilters}
        >
          {categories.map((item, index) => <MenuItem key={`${id}-${index}`} value={item}>{item}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>
  );
})

export { Categories }