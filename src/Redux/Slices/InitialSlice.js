import {createSlice} from '@reduxjs/toolkit';

const initialSlice = createSlice({
  name: 'initial',
  initialState: {
    isDark: false,
    isUserLoggedIn: false,
    user: {},
    token: '',
  },
  reducers: {
    setTheme(state) {
      state.isDark = !state.isDark;
    },
    setUserLogin(state, action) {
      state.isUserLoggedIn = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setUserLogout(state) {
      state.isUserLoggedIn = false;
      state.user = {};
      state.token = '';
    },
    updateUserName(state, action) {
      state.user.fname = action.payload.fname;
      state.user.lname = action.payload.lname;
    },
  },
});

export const {setTheme, setUserLogin, setUserLogout, updateUserName} =
  initialSlice.actions;
export default initialSlice.reducer;
