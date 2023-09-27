import { getAllProducts } from "../../api";
import { createSlice } from "@reduxjs/toolkit";
import { Dispatch } from 'redux';


const productSlice = createSlice({
  name: '@@products',
  initialState: [],
  reducers: {
    setAllProducts: (state, action) => {
      return action.payload;
    }
  }
});

const { setAllProducts } = productSlice.actions;

const getProducts = () => {
  return (dispatch: Dispatch) => {
    getAllProducts().then(data => dispatch(setAllProducts(data)))
  }
}

export { getProducts, productSlice }