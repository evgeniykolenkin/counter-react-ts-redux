import { DECREMENT_CONTER, INCREMENT_CONTER, RESET_CONTER } from "./constants";

export const incrementCount = () => {
  return {
    type: INCREMENT_CONTER,
  };
};

export const decrementCount = () => {
  return {
    type: DECREMENT_CONTER,
  };
};

export const resetCount = () => {
  return {
    type: RESET_CONTER,
  };
};
