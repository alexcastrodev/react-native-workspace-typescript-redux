import userReducer from './user';
import * as toolkitRaw from '@reduxjs/toolkit';

export const store = toolkitRaw.configureStore({
  reducer: {
    user: userReducer || (() => ({})),
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
