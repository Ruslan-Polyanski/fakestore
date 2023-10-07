import { createSlice } from "@reduxjs/toolkit";
import { Dispatch } from 'redux';

const filtersSlice = createSlice({
  name: '@@filters',
  initialState: {
    invisible: true,
    limitsSlider: 3,
  },
  reducers: {
    setVisibleFilters: (state, action) => {
      state.invisible = action.payload;
    },
    setLimitSlider: (state, action) => {
      state.limitsSlider = action.payload;
    }
  }
});

const { setVisibleFilters, setLimitSlider } = filtersSlice.actions;

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


export { filtersSlice, setVisibleFiltersData, setLimitSliderData }