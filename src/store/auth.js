import { createSlice  , configureStore} from '@reduxjs/toolkit';

const auth = createSlice({
    name: 'auth',
    initialState: {
        isLogin: false,
        email: '',
        password: null,
        isAdmin: null,
    },
    reducers:{
      login(state, action) {
          state.isLogin = true;
          state.email = action.payload.email;
          state.password = action.payload.password;
          state.isAdmin = action.payload.isAdmin;
      },
        logout(state) {
          state.isLogin = false;
          state.email = '';
          state.password = null;
          state.isAdmin = ''
        }
    }
})

export const {login, logout} = auth.actions;
export default auth.reducer;



export const store = configureStore({
    reducer: {
        auth: auth.reducer,
    },
});