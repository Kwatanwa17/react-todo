import { firestore } from 'firebase';

export const signUp = data => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  try {
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password);
    console.log(res);
    await firestore.collection('users').doc(res.user.uid).set({
      email: data.email,
      password: data.password,
    });
  } catch (err) {}
};
