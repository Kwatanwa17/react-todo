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

const RecoveryPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('無効なメールアドレスです')
    .required('必須項目です'),
});

const RecoveryPassword = ({ cleanUp, sendEmail, error, success, loading }) => {
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
      }}
      validationSchema={RecoveryPasswordSchema}
      onSubmit={async (values, { setSubmitting }) => {
        console.log({ values });
        await sendEmail(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, isValid, dirty }) => (
        <FormWrapper>
          <Heading size="h1" margin="1rem" fontWeight={700}>
            パスワードのリセット
          </Heading>
          <Heading size="h4" margin="3rem">
            登録しているメールアドレスを入力してください
          </Heading>
          <Form>
            <Field
              type="email"
              name="email"
              placeholder="メールアドレス"
              component={Input}
            />
            <Button
              type="submit"
              disabled={!(isValid && dirty) || isSubmitting || error || success}
              loading={loading ? 'お待ちください' : null}
            >
              送信
            </Button>
            <MessageWrapper>
              <Message error show={error}>
                {error}
              </Message>
              <Message success show={success === true}>
                メールが送信されました
              </Message>
            </MessageWrapper>
          </Form>
        </FormWrapper>
      )}
    </Formik>
  );
};

const mapStateToProps = ({ auth }) => ({
  loading: auth.recoverPassword.loading,
  error: auth.recoverPassword.error,
  success: auth.recoverPassword.success,
});

const mapDispatchToProps = {
  sendEmail: actions.recoverPassword,
  cleanUp: actions.cleanUp,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecoveryPassword);
