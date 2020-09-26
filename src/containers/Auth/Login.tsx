import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { Button, Input } from '../../components';
import { Form, FormWrapper } from '../../elements';

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
          <h1>ログイン</h1>
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
            <Button type="submit">送信</Button>
          </Form>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default Login;
