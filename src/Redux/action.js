export const FETCH_REGISTER_BEGIN = 'FETCH_REGISTER_BEGIN';
export const FETCH_REGISTER_SUCCESS = 'FETCH_REGISTER_SUCCESS';
export const FETCH_REGISTER_FAILURE = 'FETCH_REGISTER_FAILURE';
export const FETCH_LOGIN_BEGIN = 'FETCH_LOGIN_BEGIN';
export const FETCH_LOGIN_SUCCESS = 'FETCH_LOGIN_SUCCESS';
export const FETCH_LOGIN_FAILURE = 'FETCH_LOGIN_FAILURE';
export const  CLEAN_USER_DATA =  'CLEAN_USER_DATA';

export const fetchRegisterBegin = () => ({
  type: FETCH_REGISTER_BEGIN
});
export const fetchRegisterSuccess = register => ({
  type: FETCH_REGISTER_SUCCESS,
  payload: register
});
export const fetchRegisterFailure = error => ({
  type: FETCH_REGISTER_FAILURE,
  payload: error
});
export const fetchLoginBegin = login => ({
  type: FETCH_LOGIN_BEGIN,
});
export const fetchLoginSuccess = login => ({
  type: FETCH_LOGIN_SUCCESS,
  payload: login
});
export const fetchLoginFailure = error => ({
  type: FETCH_LOGIN_FAILURE,
  payload: error
});
export const cleanUserData = () => ({
  type: CLEAN_USER_DATA,
});

