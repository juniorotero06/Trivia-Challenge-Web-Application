import { LOADING, GET_QUESTIONS } from "../actions";

const initialState = {
  questions: [],
  loading: false,
};

export default function rootReducer(state = initialState, action) {
  if (action.type === LOADING) {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === GET_QUESTIONS) {
    return {
      ...state,
      loading: false,
      questions: action.payload,
    };
  }
  return state;
}
