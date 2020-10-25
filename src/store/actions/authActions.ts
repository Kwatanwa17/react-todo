import * as actions from './actionTypes';

// SignIn action creator
export const signUp = data => async (dispatch, getState, { getFirebase, getFirestore }) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  dispatch({ type: actions.AUTH_START });
  try {
    const res = await firebase.auth().createUserWithEmailAndPassword(data.email, data.password);

    // send a verification email
    const user = firebase.auth().currentUser;
    await user.sendEmailVerification();

    console.log(res);
    await firestore.collection('users').doc(res.user.uid).set({
      email: data.email,
      password: data.password,
    });
    dispatch({ type: actions.AUTH_SUCCESS });
  } catch (err) {
    dispatch({ type: actions.AUTH_FAIL, payload: err.message });
  }
  dispatch({ type: actions.AUTH_END });
};

// Logout action creator
export const signOut = () => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  try {
    await firebase.auth().signOut();
  } catch (err) {
    console.log(err.message);
  }
};

// login action creator
export const signIn = data => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  dispatch({ type: actions.AUTH_START });
  try {
    await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
    dispatch({ type: actions.AUTH_SUCCESS });
  } catch (err) {
    dispatch({ type: actions.AUTH_FAIL, payload: err.message });
  }
  dispatch({ type: actions.AUTH_END });
};

// clean up action creator
export const cleanUp = () => ({
  type: actions.CLEAN_UP,
});

// verify email action creator
export const verifyEmail = () => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  dispatch({ type: actions.VERIFY_START });
  try {
    const user = firebase.auth().currentUser;
    await user.sendEmailVerification();
    dispatch({ type: actions.VERIFY_SUCCESS });
  } catch (err) {
    dispatch({ type: actions.VERIFY_FAIL, payload: err.message });
  }
};

export const verifyCleanUp = () => ({
  type: actions.VERIFY_CLEANUP,
});

// recover password action creator
export const recoverPassword = data => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  dispatch({ type: actions.RECOVER_START });
  try {
    await firebase.auth().sendPasswordResetEmail(data.email);
    dispatch({ type: actions.RECOVER_SUCCESS });
  } catch (err) {
    dispatch({ type: actions.RECOVER_FAIL, payload: err.message });
  }
};

// edit profile action creator
export const editProfile = data => async (dispatch, getState, { getFirebase, getFirestore }) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  const user = firebase.auth().currentUser;
  const { uid: userId, email: userEmail } = getState().firebase.auth;
  dispatch({ type: actions.PROFILE_EDIT_START });
  try {
    if (data.email !== userEmail) {
      await user.updateEmail(data.email);
    }
    if (data.password && data.password.length > 0) {
      await user.updatePassword(data.password);
    }
    dispatch({ type: actions.PROFILE_EDIT_SUCCESS });
  } catch (err) {
    dispatch({ type: actions.PROFILE_EDIT_FAIL, payload: err.message });
  }
};

// delete user action creator
export const deleteUser = data => async (dispatch, getState, { getFirebase, getFirestore }) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  const user = firebase.auth().currentUser;
  const userId = getState().firebase.auth.uid;
  dispatch({ type: actions.DELETE_USER_START });
  try {
    await firestore.collection('users').doc(userId).delete();
    await firestore.collection('todos').doc(userId).delete();
    await user.delete();
    dispatch({ type: actions.DELETE_USER_SUCCESS });
  } catch (err) {
    dispatch({ type: actions.DELETE_USER_FAIL, payload: err.message });
  }
};
