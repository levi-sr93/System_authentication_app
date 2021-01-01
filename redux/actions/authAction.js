export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAIL = "REGISTER_USER_FAIL";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

export const registerUser = (authData) => {
  //logic to REGISTER user
  const { fullName, email, password } = data;

  //dispatch function to register Function
  //the benefits of this approach is because here we can add logic to make a post to create user

  return async (dispatch) => {
    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: 1,
    });
  };
};

export const loginUser = (authData) => {
  //logic to register user
  const { email, password } = data;

  //dispatch function to LOGIN Function
  //the benefits of this approach is because here we can add logic to make a post to create user

  return async (dispatch) => {
    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: 1,
    });
  };
};
