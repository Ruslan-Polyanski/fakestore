import { configureStore } from '@reduxjs/toolkit';
import { preloaderSlice } from '../features/preloader/preloader-slice';
import { userSlice } from '../features/user/user-slice';
import { productSlice } from '../features/products/products-slice';


const store = configureStore({
  reducer: {
    preloader: preloaderSlice.reducer,
    user: userSlice.reducer,
    products: productSlice.reducer,
  },
  devTools: true,
});


export { store };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;