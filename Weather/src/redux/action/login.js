import {LOGIN_USER, PIN_SET, LOG_OUT} from '../types/index';

export const loginUser = (data) => {
  return {
    type: LOGIN_USER,
    data,
  };
};

export const pinSet = (data) => {
  console.log(data);
  return {
    type: PIN_SET,
    data,
  };
};
export const logOut = (data) => {
  return {
    type: LOG_OUT,
    data,
  };
};
