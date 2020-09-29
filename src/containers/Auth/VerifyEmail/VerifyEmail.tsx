import React from 'react';
import { FormWrapper, Heading } from '../../../elements';

const VerifyEmail = () => {
  return (
    <FormWrapper>
      <Heading size="h1" margin="2rem">
        アドレスを確認してください
      </Heading>
      <Heading size="h4">
        メールボックスを確認してリンクをクリックするか、再送信をしてアカウントを認証してください
      </Heading>
    </FormWrapper>
  );
};

export default VerifyEmail;
