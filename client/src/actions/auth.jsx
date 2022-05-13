import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';
import notify from '../helpers/Notify';

export const signin = (formData, navigate, setLoading) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    navigate('/vault');
  } catch (error) {
    notify(error?.response?.data?.message);
    setLoading(false);
  }
};

export const signup = (formData, navigate, setLoading) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    navigate('/vault');
  } catch (error) {
    notify(error?.response?.data?.message);
    setLoading(false);
  }
};
