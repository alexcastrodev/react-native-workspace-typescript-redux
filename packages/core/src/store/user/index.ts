import * as toolkitRaw from '@reduxjs/toolkit';
import {getLoggedUserExtraReducers} from '../../actions/user/getLoggedUser';
import {UserDTO, IUserState} from './interfaces';

export const userInitialState = {
  loading: false,
  isAuthenticated: false,
  error: false,
  data: {} as UserDTO,
};

const combineExtraReducers = (
  builder: toolkitRaw.ActionReducerMapBuilder<IUserState>,
) => {
  getLoggedUserExtraReducers(builder);
};

export const userSlice = toolkitRaw.createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    clearLoggedUser: state => {
      state.data = {} as UserDTO;
      state.isAuthenticated = false;
    },
  },
  extraReducers: builder => {
    return combineExtraReducers(builder);
  },
});

export const {clearLoggedUser} = userSlice.actions;

export default userSlice.reducer;
