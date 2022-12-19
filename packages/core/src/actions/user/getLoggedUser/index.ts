import {UserDTO, IUserState} from '../../../store/user/interfaces';
import * as toolkitRaw from '@reduxjs/toolkit';
import {ERROR_GET_USER, IGetLoggedUser} from './getLoggedUser.types';
import api from '../../../services/api';
import {AxiosResponse} from 'axios';

const getLoggedUser = toolkitRaw.createAsyncThunk<UserDTO, IGetLoggedUser>(
  'user/fetch_logged_user',
  async (data, {rejectWithValue}) => {
    try {
      const user: AxiosResponse<UserDTO> = await api.get('/people/1', {
        headers: {
          Authorization: `Bearer ${String(data.bearerToken)}`,
        },
      });

      return user.data;
    } catch (e) {
      return rejectWithValue({message: ERROR_GET_USER});
    }
  },
);

export const getLoggedUserExtraReducers = (
  builder: toolkitRaw.ActionReducerMapBuilder<IUserState>,
) => {
  builder.addCase(getLoggedUser.pending, state => {
    state.loading = true;
  });
  builder.addCase(getLoggedUser.fulfilled, (state, action) => {
    state.data = action.payload;
    state.loading = false;
    state.isAuthenticated = true;
    state.error = false;
  });
  builder.addCase(getLoggedUser.rejected, state => {
    state.loading = false;
    state.error = true;
  });
};

export default getLoggedUser;
