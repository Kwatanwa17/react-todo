import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { Button, Input } from '../../components';
import { Form, FormWrapper, Heading } from '../../elements';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('無効なメールアドレスです')
    .required('必須項目です'),
  password: Yup.string().required('必須項目です'),
});

const Login = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={LoginSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
      }}
    >
      {({ isSubmitting, isValid }) => (
        <FormWrapper>
          <Heading size="h1" margin="3rem" fontWeight={700}>
            ログイン
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
            <Button type="submit" disabled={!isValid}>
              送信
            </Button>
          </Form>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default Login;
