import { createSlice } from '@reduxjs/toolkit';
import { PickType } from '../../data/types';

const initialPick: PickType = {
  radiant: [null, null, null, null, null],
  dire: [null, null, null, null, null],
};

const pickSlice = createSlice({
  name: 'pickSlice',
  initialState: initialPick,

  reducers: {
    addHero(state, action) {
      if (state.radiant.some(element => element == null)) {
        state.radiant.splice(
          state.radiant.findIndex(element => element == null),
          1,
          action.payload
        );
      } else if (state.dire.some(element => element == null)) {
        state.dire.splice(
          state.dire.findIndex(element => element == null),
          1,
          action.payload
        );
      } else return;
    },
    removeDireHero(state, action) {
      state.dire.forEach((hero, index) => {
        if (hero === null) {
          return;
        } else if (hero.name === action.payload.name) {
          state.dire.splice(index, 1, null);
        }
      });
    },
    removeRadiantHero(state, action) {
      state.radiant.forEach((hero, index) => {
        if (hero === null) {
          return;
        } else if (hero.name === action.payload.name) {
          state.radiant.splice(index, 1, null);
        }
      });
    },
    clearState(state) {
      state.radiant.splice(0, 5, null, null, null, null, null);
      state.dire.splice(0, 5, null, null, null, null, null);
    },
  },
});

export const { addHero, removeDireHero, clearState, removeRadiantHero } = pickSlice.actions;
export default pickSlice.reducer;
