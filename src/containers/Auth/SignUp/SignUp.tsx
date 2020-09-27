import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { Button, Input } from '../../../components';
import { Form, FormWrapper, Heading } from '../../../elements';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('無効なメールアドレスです')
    .required('必須項目です'),
  password: Yup.string().required('必須項目です'),
  confirmedPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], '同じパスワードを入力してください')
    .required('必須項目です'),
});

const SignUp = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmedPassword: '',
      }}
      validationSchema={LoginSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
      }}
    >
      {({ isSubmitting, isValid }) => (
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
            <Button type="submit" disabled={!isValid}>
              登録する
            </Button>
          </Form>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default SignUp;
