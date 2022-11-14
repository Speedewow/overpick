import { configureStore } from '@reduxjs/toolkit';
import { pickReducer, startReducer } from './slices';

export const store = configureStore({
  reducer: {
    pick: pickReducer,
    start: startReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
