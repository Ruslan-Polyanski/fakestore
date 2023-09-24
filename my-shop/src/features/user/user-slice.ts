import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: '@@user',
  initialState: {
    name: null,
    pass: null,
    token: null
  },
  reducers: {
    setDataUser: (state, action) => {
      const { username, password, token } = action.payload;
      state.name = username;
      state.pass = password;
      state.token = token;
    }
  }
});

export { userSlice }