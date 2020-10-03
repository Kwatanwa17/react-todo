import * as actions from '../actions/authTypes';

const initialState = {
  error: null,
  loading: false,
  verifyEmail: { error: null, success: false, loading: false },
  recoverPassword: { error: null, success: false, loading: false },
  profileEdit: { error: null, success: false, loading: false },
  deleteUser: { error: null, success: false, loading: false },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.CLEAN_UP:
      return {
        ...state,
        error: null,
        loading: false,
        verifyEmail: { ...state.verifyEmail, error: null, success: false, loading: false },
        recoverPassword: { ...state.recoverPassword, error: null, success: false, loading: false },
        deleteUser: { ...state.verifyEmail, error: null, success: false, loading: false },
      };

    case actions.AUTH_START:
      return { ...state, loading: true };

    case actions.AUTH_END:
      return { ...state, loading: false };

    case actions.AUTH_FAIL:
      return { ...state, loading: false, error: action.payload };

    case actions.AUTH_SUCCESS:
      return { ...state, error: false };

    case actions.VERIFY_START:
      return { ...state, verifyEmail: { ...state.verifyEmail, loading: true } };

    case actions.VERIFY_SUCCESS:
      return {
        ...state,
        verifyEmail: { ...state.verifyEmail, loading: false, error: false, success: true },
      };

    case actions.VERIFY_FAIL:
      return {
        ...state,
        verifyEmail: { ...state.verifyEmail, loading: false, error: action.payload },
      };

    case actions.VERIFY_CLEANUP:
      return {
        ...state,
        verifyEmail: { ...state.verifyEmail, error: null, success: false, loading: false },
      };

    case actions.RECOVER_START:
      return {
        ...state,
        recoverPassword: { ...state.recoverPassword, loading: true },
      };

    case actions.RECOVER_SUCCESS:
      return {
        ...state,
        recoverPassword: { ...state.recoverPassword, loading: false, error: false, success: true },
      };

    case actions.RECOVER_FAIL:
      return {
        ...state,
        recoverPassword: { ...state.recoverPassword, loading: false, error: action.payload },
      };

    case actions.PROFILE_EDIT_START:
      return {
        ...state,
        profileEdit: { ...state.profileEdit, loading: true },
      };

    case actions.PROFILE_EDIT_SUCCESS:
      return {
        ...state,
        profileEdit: { ...state.profileEdit, loading: false, error: false, success: true },
      };

    case actions.PROFILE_EDIT_FAIL:
      return {
        ...state,
        profileEdit: { ...state.profileEdit, loading: false, error: action.payload },
      };

    case actions.DELETE_USER_START:
      return {
        ...state,
        deleteUser: { ...state.deleteUser, loading: true },
      };

    case actions.DELETE_USER_FAIL:
      return {
        ...state,
        deleteUser: { ...state.deleteUser, loading: false, error: action.payload },
      };

    case actions.DELETE_USER_SUCCESS:
      return {
        ...state,
        deleteUser: { ...state.deleteUser, loading: false, success: true },
      };

    default:
      return state;
  }
};
