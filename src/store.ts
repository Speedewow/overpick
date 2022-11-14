import { configureStore } from '@reduxjs/toolkit';
import pickReducer from './reducers/reducer';

export const store = configureStore({
  reducer: {
    pick: pickReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
