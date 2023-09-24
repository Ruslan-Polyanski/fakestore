import { configureStore } from '@reduxjs/toolkit';
import { preloaderSlice } from '../features/preloader/preloader-slice';
import { userSlice } from '../features/user/user-slice';

const store = configureStore({
  reducer: {
    preloader: preloaderSlice.reducer,
    user: userSlice.reducer,
  },
  devTools: true,
});



export { store };
export type RootState = ReturnType<typeof store.getState>;