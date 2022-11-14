import { createSlice } from '@reduxjs/toolkit';

const initialStart: boolean = false;

const startSlice = createSlice({
  name: 'startSlice',
  initialState: initialStart,

  reducers: {
    setStart(state) {
      return (state = true);
    },
    setEnd(state) {
      return (state = false);
    },
  },
});

export const { setStart, setEnd } = startSlice.actions;
export default startSlice.reducer;
