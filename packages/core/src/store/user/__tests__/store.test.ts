import MockAdapter from 'axios-mock-adapter';
import {configureStore} from '@reduxjs/toolkit';
import api from '../../../services/api';
import UserReducer from '..';
import getLoggedUser from '../../../actions/user/getLoggedUser';
import defaultMountedStore from '../__mocks__/defaultMountedStore.json';
import storeWithUser from '../__mocks__/storeWithUser.json';
import storeWithUserError from '../__mocks__/storeWithUserError.json';
import fetchUser from '../__mocks__/fetchUser.json';
import {ERROR_GET_USER} from '../../../actions/user/getLoggedUser/getLoggedUser.types';

describe('User store', () => {
  test('Should mount store', async () => {
    const mock = new MockAdapter(api);
    mock.onGet('/people/1').reply(200, fetchUser);

    const store = configureStore({
      reducer: {
        user: UserReducer,
      },
    });

    expect(store.getState()).toEqual(defaultMountedStore);
  });
  test('Should mount store and get user', async () => {
    const mock = new MockAdapter(api);
    mock.onGet('/people/1').reply(200, fetchUser);

    const store = configureStore({
      reducer: {
        user: UserReducer,
      },
    });

    await store.dispatch(
      getLoggedUser({
        bearerToken: '',
        idToken: '',
      }),
    );
    expect(store.getState()).toEqual(storeWithUser);
  });
  test('Should mount store and get user with error', async () => {
    const mock = new MockAdapter(api);
    mock.onGet('/people/1').reply(404, fetchUser);

    const store = configureStore({
      reducer: {
        user: UserReducer,
      },
    });

    const dispathError = await store.dispatch(
      getLoggedUser({
        bearerToken: '',
        idToken: '',
      }),
    );
    expect(dispathError.payload).toStrictEqual({message: ERROR_GET_USER});
    expect(store.getState()).toEqual(storeWithUserError);
  });
});
