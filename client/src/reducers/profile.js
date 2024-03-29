import {
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  UPDATE_PROFILE,
  GET_REPOS
} from '../actions/types';

const intialState = {
  profile: null,
  loading: true,
  repos: [],
  profiles: [],
  error: {}
};

export default function(state = intialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PROFILE:
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false
      };
    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
        loading: false
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        loading: false,
        repos: []
      };

    case GET_REPOS:
      return {
        ...state,
        repos: payload,
        loading: false
      };

    default:
      return state;
  }
}
