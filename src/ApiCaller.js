import {
  fetchRegisterBegin,
  fetchRegisterSuccess,
  fetchRegisterFailure,
  fetchLoginBegin,
  fetchLoginSuccess,
  fetchLoginFailure
} from "./Redux/action";

export const fetchRegister = (body, method) => {
  return (dispatch) => {
    dispatch(fetchRegisterBegin());
    return fetch("https://reqres.in/api/register", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: 'Post',
      body: JSON.stringify(body),
    })
      .then((res) => {
        console.log("response========>", res)
        return res.json()
      })
      .then((json) => {
        dispatch(fetchRegisterSuccess(json));
        return json;
      })
      .catch((error) => dispatch(fetchRegisterFailure(error)));
  };
}
export const fetchLogin = (body, method) => {
  console.log("bodyyyyyy", body)
  return (dispatch) => {
    dispatch(fetchLoginBegin());
    return fetch("https://reqres.in/api/login", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: 'Post',
      body: JSON.stringify(body),
    })
      .then((res) => {
        console.log("response========>", res)
        return res.json()
      })
      .then((json) => {
        dispatch(fetchLoginSuccess(json));
        return json;
      })
      .catch((error) => dispatch(fetchLoginFailure(error)));
  };
}