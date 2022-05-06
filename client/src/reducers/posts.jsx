import {
  FETCH_ALL,
  CREATE,
  START_LOADING,
  END_LOADING,
  UPDATE,
  DELETE,
  CLEAR_DATA
} from '../constants/actionTypes';

export default (state = { isLoading: true, posts: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload
      };
    case CREATE:
      return { ...state, posts: [...state.posts, action.payload] };
    case UPDATE:
      return {
        ...state,
        posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post))
      };
    case DELETE:
      return { ...state, posts: state.posts.filter((post) => post._id !== action.payload) };
    case CLEAR_DATA:
      localStorage.clear();
      return { ...state, isLoading: true, posts: [] };
    default:
      return state;
  }
};
