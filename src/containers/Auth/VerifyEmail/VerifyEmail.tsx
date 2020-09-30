import React from 'react';
import { connect } from 'react-redux';
import { Button } from '../../../components';
import {
  FormWrapper,
  Heading,
  Message,
  MessageWrapper,
} from '../../../elements';
import * as actions from '../../../store/actions';

const VerifyEmail = ({
  error,
  success,
  loading,
  verifyEmail,
  verifyCleanUp,
}) => {
  return (
    <FormWrapper>
      <Heading size="h1" margin="2rem">
        アドレスを確認してください
      </Heading>
      <Heading size="h4" margin="2rem">
        メールボックスを確認してリンクをクリックするか、再送信をしてアカウントを認証してください
      </Heading>
      <Button
        loading={loading ? 'メールを送信しています' : null}
        onClick={() => verifyCleanUp() && verifyEmail()}
      >
        メールを再送信する
      </Button>
      <MessageWrapper>
        <Message error show={error}>
          {error}
        </Message>
        <Message success show={success}>
          メールが送信されました
        </Message>
      </MessageWrapper>
    </FormWrapper>
  );
};

const mapStateToProps = ({ auth }) => ({
  loading: auth.verifyEmail.loading,
  error: auth.verifyEmail.error,
  success: auth.verifyEmail.success,
});

const mapDispatchToProps = {
  verifyEmail: actions.verifyEmail,
  verifyCleanUp: actions.verifyCleanUp,
};

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmail);
