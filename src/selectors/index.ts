import { StateType } from '../data/types';

export const pickSelector = (state: StateType) => state.pick;
export const direPickSelector = (state: StateType) => state.pick.dire;
export const radiantPickSelector = (state: StateType) => state.pick.radiant;
export const startSelector = (state: StateType) => state.start;
