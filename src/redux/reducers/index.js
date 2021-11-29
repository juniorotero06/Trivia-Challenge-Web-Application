import { LOADING, GET_QUESTIONS, NAME_AUTH, RETRY_QUEST } from "../actions";

const initialState = {
  questions: [],
  loading: false,
  auth: false,
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
  if (action.type === NAME_AUTH) {
    return {
      ...state,
      auth: true,
    };
  }
  if (action.type === RETRY_QUEST) {
    return {
      ...state,
      auth: false,
    };
  }
  return state;
}
