import { createSlice } from "@reduxjs/toolkit";
import { Dispatch } from 'redux';
import { getCategories } from '../../api';

const categoriesSlice = createSlice({
  name: '@@categories',
  initialState: [],
  reducers: {
    setCategories: (state, action) => {
      return action.payload;
    }
  }
});

const { setCategories } = categoriesSlice.actions;

const setCategoriesData = () => {
  return (dispatch: Dispatch) => {
    getCategories().then(data => dispatch(setCategories(data)))
  }
};

export { categoriesSlice, setCategoriesData }