import { StateType } from "./reducer";

export const getCounter = (state: StateType) => state.counter.value;
