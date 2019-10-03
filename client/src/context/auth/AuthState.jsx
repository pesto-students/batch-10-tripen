import React, { useReducer } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import AuthContext from './authContext';
import authReducer from './authReducer';
import serverUrl from '../../serverUrl';

import setAuthToken from '../../utils/setAuthToken';

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from '../types';

const AuthState = ({ children }) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: localStorage.getItem('isAuthenticated'),
    loading: localStorage.getItem('loading'),
    error: localStorage.getItem('error'),
    name: localStorage.getItem('name'),
    username: localStorage.getItem('username'),
    email: localStorage.getItem('email'),
    userId: localStorage.getItem('userId'),
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      dispatch({ type: USER_LOADED });
    } catch (error) {
      dispatch({ type: AUTH_ERROR });
    }
  };

  const register = async (formData) => {
    const config = {
      headers: { 'Content-Type': 'application/json' },
    };
    try {
      const res = await axios.post(`${serverUrl}/api/v1/auth/signup`, formData, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data.user,
      });
      loadUser();
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.message,
      });
    }
  };

  const login = async (formData) => {
    const config = {
      headers: { 'Content-Type': 'application/json' },
    };
    try {
      const res = await axios.post(`${serverUrl}/api/v1/auth/signin`, formData, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data.user,
      });
      loadUser();
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.msg,
      });
    }
  };


  const logout = () => {
    dispatch({
      type: LOGOUT,
    });
  };

  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  return (
    <AuthContext.Provider
      value={{
        register,
        loadUser,
        login,
        logout,
        clearErrors,
        name: state.name,
        email: state.email,
        username: state.username,
        userId: state.userId,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthState;
