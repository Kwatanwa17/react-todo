import * as actions from '../actions/authTypes';

const initialState = {
  error: null,
  loading: false,
  verifyEmail: {
    error: null,
    success: false,
    loading: false,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.AUTH_START:
      return { ...state, loading: true };

    case actions.AUTH_END:
      return { ...state, loading: false };

    case actions.AUTH_FAIL:
      return { ...state, loading: false, error: action.payload };

    case actions.AUTH_SUCCESS:
      return { ...state, error: false };

    case actions.CLEAN_UP:
      return { ...state, error: null, loading: false };

    case actions.VERIFY_START:
      return { ...state, verifyEmail: { ...state.verifyEmail, loading: true } };

    case actions.VERIFY_SUCCESS:
      return {
        ...state,
        verifyEmail: {
          ...state.verifyEmail,
          loading: false,
          error: false,
          success: true,
        },
      };

    case actions.VERIFY_FAIL:
      return {
        ...state,
        verifyEmail: {
          ...state.verifyEmail,
          loading: false,
          error: action.payload,
        },
      };

    case actions.VERIFY_CLEANUP:
      return {
        ...state,
        verifyEmail: {
          ...state.verifyEmail,
          error: null,
          success: false,
          loading: false,
        },
      };

    default:
      return state;
  }
};
