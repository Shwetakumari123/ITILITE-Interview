import {LOGIN_USER, PIN_SET, LOG_OUT} from '../types/index';

const initialState = {
  userName: 'admin',
  passWord: 'admin',
  isLoggedIn: false,
  isPinSet: false,
  pin: '',
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      console.log(action);
      return {...state, isLoggedIn: action.data.isLoggedIn};
    case PIN_SET:
      return {...state, isPinSet: action.data.isPinSet, pin: action.data.pin};
    case LOG_OUT:
      return {
        ...state,
        isLoggedIn: action.data.isLoggedIn,
        isPinSet: action.data.isPinSet,
      };
    default:
      return state;
  }
};

export default LoginReducer;
