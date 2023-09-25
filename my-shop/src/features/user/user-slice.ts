import { createSlice } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';
import { cookie } from '../../cookie';
import { getToken } from '../../api';

let initialState = {
  name: null,
  pass: null,
  token: null,
  status: false,
}

const result: any = cookie.get('user'); // Доработать типы!!!

if(result){
  initialState = {
    name: result.username,
    pass: result.password,
    token: result.token,
    status: true,
  }
}

const userSlice = createSlice({
  name: '@@user',
  initialState: initialState,
  reducers: {
    setDataUser: (state, action) => {
      const { username, password, token, status } = action.payload;
      state.name = username;
      state.pass = password;
      state.token = token;
      state.status = status;
    },
    resetDataUser: (state) => {
        state.name = null;
        state.pass = null;
        state.token = null;
        state.status = false;
    }
  }
});

const { setDataUser, resetDataUser } = userSlice.actions;

const getLogOut = () => {
  return (dispatch: Dispatch) => {
    cookie.reset()
    dispatch(resetDataUser())
  }
}

const getDataUser = (name: string, pass: string) => {
  return async (dispatch: Dispatch) => {
    await getToken(name, pass)
    const result = cookie.get('user');
    if(result){
      dispatch(setDataUser(result))
    }
  }
}

export { userSlice, getLogOut, getDataUser }