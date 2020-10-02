import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import {
  Form,
  FormWrapper,
  Heading,
  Message,
  MessageWrapper,
} from '../../../elements';
import { Button, Input } from '../../../components';
import * as actions from '../../../store/actions';
import { Modal } from '../../../elements';

const ProfileSchema = Yup.object().shape({
  email: Yup.string()
    .email('無効なメールアドレスです')
    .required('必須項目です'),
  password: Yup.string().min(8, 'パスワードが短すぎます'),
  confirmedPassword: Yup.string().when('password', {
    is: password => password && password.length > 0,
    then: Yup.string()
      .required('必須項目です')
      .oneOf([Yup.ref('password'), null], '同じパスワードを入力してください'),
  }),
});

const Profile = ({
  firebase,
  error,
  loading,
  success,
  editProfile,
  cleanUp,
}) => {
  useEffect(() => {
    return async () => {
      // clean up messages
      await cleanUp();
    };
  }, [cleanUp]);
  return (
    <>
      <Formik
        initialValues={{
          email: firebase.auth.email,
          password: '',
        }}
        validationSchema={ProfileSchema}
        onSubmit={async (values, { setSubmitting }) => {
          await editProfile(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, isValid }) => {
          return (
            <FormWrapper>
              <Heading size="h1" margin="1rem" fontWeight={700}>
                ユーザー情報
              </Heading>
              <Heading size="h4" margin="3rem">
                変更する箇所を書き換えてください
              </Heading>
              <Form>
                <Field
                  type="email"
                  name="email"
                  placeholder="メールアドレス"
                  component={Input}
                />
                <Field
                  type="password"
                  name="password"
                  placeholder="パスワード"
                  component={Input}
                />
                <Field
                  type="password"
                  name="confirmedPassword"
                  placeholder="パスワード再入力"
                  component={Input}
                />
                <Button
                  type="submit"
                  disabled={!isValid || isSubmitting}
                  loading={loading ? 'お待ちください' : null}
                >
                  更新する
                </Button>
                <MessageWrapper>
                  <Message error show={error}>
                    {error}
                  </Message>
                  <Message success show={success === true}>
                    変更されました
                  </Message>
                </MessageWrapper>
              </Form>
            </FormWrapper>
          );
        }}
      </Formik>
      <Modal opened>モーダルオープン</Modal>
    </>
  );
};

const mapStateToProps = ({ firebase, auth }) => ({
  firebase,
  loading: auth.profileEdit.loading,
  error: auth.profileEdit.error,
  success: auth.profileEdit.success,
});

const mapDispatchToProps = {
  editProfile: actions.editProfile,
  cleanUp: actions.cleanUp,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
