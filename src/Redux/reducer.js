import {
  FETCH_REGISTER_BEGIN,
  FETCH_REGISTER_SUCCESS,
  FETCH_REGISTER_FAILURE,
  FETCH_LOGIN_BEGIN,
  FETCH_LOGIN_FAILURE,
  FETCH_LOGIN_SUCCESS,
  CLEAN_USER_DATA
} from './action'
const initialState = {
  register: [],
  login: [],
  loading: false,
  error: null
};
export const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REGISTER_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        register: action.payload
      };
    case FETCH_REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        register: []
      };
    default:
      return state;
  }
}
export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOGIN_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        login: action.payload
      };
    case FETCH_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        login: []
      };
      case CLEAN_USER_DATA:
        return {
          ...state,
          loading:false,
          error:null,
          login: []
        };
      default:
        return state;
    }
  }