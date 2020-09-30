import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

import * as actions from '../../../store/actions';
import { Button, Input } from '../../../components';
import {
  Form,
  FormWrapper,
  Heading,
  Message,
  MessageWrapper,
} from '../../../elements';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('無効なメールアドレスです')
    .required('必須項目です'),
  password: Yup.string()
    .required('必須項目です')
    .min(8, 'パスワードが短すぎます'),
});

const Login = ({ cleanUp, login, loading, error }) => {
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
      }}
      validationSchema={LoginSchema}
      onSubmit={async (values, { setSubmitting }) => {
        await login(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, isValid }) => (
        <FormWrapper>
          <Heading size="h1" margin="1rem" fontWeight={700}>
            ログイン
          </Heading>
          <Heading size="h4" margin="3rem">
            アカウントにログインしてください
          </Heading>
          <Form>
            <Field
              type="email"
              name="email"
              placeholder="メールアドレス"
              component={Input}
            />
            {/* <ErrorMessage name="email" /> */}
            <Field
              type="password"
              name="password"
              placeholder="パスワード"
              component={Input}
            />
            {/* <ErrorMessage name="password" /> */}
            <Button
              type="submit"
              disabled={!isValid || isSubmitting}
              loading={loading ? 'お待ちください' : null}
            >
              ログイン
            </Button>
            <MessageWrapper>
              <Message error>{error}</Message>
            </MessageWrapper>
          </Form>
        </FormWrapper>
      )}
    </Formik>
  );
};

const mapStateToProps = ({ auth }) => ({
  loading: auth.loading,
  error: auth.error,
});

const mapDispatchToProps = {
  cleanUp: actions.cleanUp,
  login: actions.signIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
