import { createSlice } from "@reduxjs/toolkit";
import { Dispatch } from 'redux';
import { getProductDataAPI } from "../../api";

const productPageSlice = createSlice({
  name: '@@productPage',
  initialState: {},
  reducers: {
    setPageProduct: (state, action) => {
      return action.payload;
    }
  }
});

const { setPageProduct } = productPageSlice.actions;

const getProductData = (id: string) => {
  return (dispatch: Dispatch) => {
    getProductDataAPI(id).then(data => dispatch(setPageProduct(data)))
  }
}

export { productPageSlice, getProductData }