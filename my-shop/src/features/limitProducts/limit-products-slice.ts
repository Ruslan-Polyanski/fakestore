import { createSlice } from "@reduxjs/toolkit";
import { getLimitProducts } from "../../api";
import { Dispatch } from 'redux';

const limitProductSlice = createSlice({
  name: '@@limitProducts',
  initialState: [],
  reducers: {
    setPageLimitProducts: (state, action) => {
      return action.payload;
    },
    // setProductsCategory: (state, action) => {
    //   return action.payload;
    // }
  }
});

const { setPageLimitProducts } = limitProductSlice.actions;

const getLimitProductsData = (num: number) => {
  return (dispatch: Dispatch) => {
    getLimitProducts(num).then(data => dispatch(setPageLimitProducts(data)))
  }
}


export { limitProductSlice, getLimitProductsData }