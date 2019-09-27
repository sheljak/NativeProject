import {
  FETCH_AMBASADORS_PENDING,
  FETCH_AMBASADORS_SUCCESS,
  FETCH_AMBASADORS_ERROR,
} from '../constants';

const initialState = {
  ambasadors: [],
  isFetching: false,
  error: false,
};

export default function ambasadorReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_AMBASADORS_PENDING:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_AMBASADORS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        ambasadors: action.data,
      };
    case FETCH_AMBASADORS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
}
