import { createSlice } from '@reduxjs/toolkit';
// import { getAuth } from '../../api';
// import { Dispatch } from 'redux';

const preloaderSlice = createSlice({
  name: '@@preloader',
  initialState: {isPreloader: false},
  reducers: {
    setPreloader: (state, action) => {
        state.isPreloader = action.payload;
    }
  }
});

// const { setPreloader } = preloaderSlice.actions;

// const getAuthorization = (name: string, pass: string) => {
//   return (dispatch: Dispatch) => {
//     dispatch(setPreloader(true))
//     getAuth()
//     dispatch(setPreloader(false))
//   }
// };

export { preloaderSlice }