import { DECREMENT_CONTER, INCREMENT_CONTER, RESET_CONTER } from "./constants";

const initialState = {
  value: 0,
};

export type StateType = {
  counter: { value: number };
};

export type IncrementActionType = {
  type: string;
};
export type DecrementActionType = {
  type: string;
};

export type ActionsType = IncrementActionType | DecrementActionType;

export function counterReducer(state = initialState, action: ActionsType) {
  switch (action.type) {
    case INCREMENT_CONTER:
      return {
        ...state,
        value: state.value + 1,
      };
    case DECREMENT_CONTER:
      return {
        ...state,
        value: state.value - 1,
      };
    case RESET_CONTER:
      return {
        ...state,
        value: 0,
      };
    default: {
      return {
        ...state,
      };
    }
  }
}
