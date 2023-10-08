import { createSlice } from "@reduxjs/toolkit";
import { Dispatch } from 'redux';

const filtersSlice = createSlice({
  name: '@@filters',
  initialState: {
    invisible: true,
    limitsSlider: 3,
    sort: '',
  },
  reducers: {
    setVisibleFilters: (state, action) => {
      state.invisible = action.payload;
    },
    setLimitSlider: (state, action) => {
      state.limitsSlider = action.payload;
    }, 
    setSort: (state, action) => {
      state.sort = action.payload;
    }
  }
});

const { setVisibleFilters, setLimitSlider, setSort } = filtersSlice.actions;

const setVisibleFiltersData = (data: boolean) => {
  return (dispatch: Dispatch) => {
    dispatch(setVisibleFilters(data))
  }
}

const setLimitSliderData = (num: number) => {
  return (dispatch: Dispatch) => {
    dispatch(setLimitSlider(num))
  }
}

const setSortData = (data: string) => {
  return (dispatch: Dispatch) => {
    dispatch(setSort(data))
  }
}


export { filtersSlice, setVisibleFiltersData, setLimitSliderData, setSortData }