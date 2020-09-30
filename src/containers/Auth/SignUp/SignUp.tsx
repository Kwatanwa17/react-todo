import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

import { Button, Input } from '../../../components';
import {
  Form,
  FormWrapper,
  Heading,
  Message,
  MessageWrapper,
} from '../../../elements';

import * as actions from '../../../store/actions';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('無効なメールアドレスです')
    .required('必須項目です'),
  password: Yup.string()
    .required('必須項目です')
    .min(8, 'パスワードが短すぎます'),
  confirmedPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], '同じパスワードを入力してください')
    .required('必須項目です'),
});

const SignUp = ({ cleanUp, signUp, loading, error }) => {
  useEffect(() => {
    return async () => {
      // clean up messages
      await cleanUp();
    };
  }, [cleanUp]);
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmedPassword: '',
      }}
      validationSchema={LoginSchema}
      onSubmit={async (values, { setSubmitting }) => {
        await signUp(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, isValid }) => {
        return (
          <FormWrapper>
            <Heading size="h1" margin="1rem" fontWeight={700}>
              アカウントの新規登録
            </Heading>
            <Heading size="h4" margin="3rem">
              必要な情報を入力してください。
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
                placeholder="パスワードの確認"
                component={Input}
              />
              <Button
                type="submit"
                disabled={!isValid || isSubmitting}
                loading={loading ? 'お待ちください' : null}
              >
                登録する
              </Button>
              <MessageWrapper>
                <Message error show={error}>
                  {error}
                </Message>
              </MessageWrapper>
            </Form>
          </FormWrapper>
        );
      }}
    </Formik>
  );
};

const mapStateToProps = state => ({ auth }) => ({
  loading: auth.loading,
  error: auth.error,
});

const mapDispatchToProps = {
  cleanUp: actions.cleanUp,
  signUp: actions.signUp,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
