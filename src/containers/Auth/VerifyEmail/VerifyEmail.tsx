import React from 'react';
import { Button } from '../../../components';
import { FormWrapper, Heading } from '../../../elements';

const VerifyEmail = () => {
  return (
    <FormWrapper>
      <Heading size="h1" margin="2rem">
        アドレスを確認してください
      </Heading>
      <Heading size="h4" margin="2rem">
        メールボックスを確認してリンクをクリックするか、再送信をしてアカウントを認証してください
      </Heading>
      <Button>メールを再送信する</Button>
    </FormWrapper>
  );
};

export default VerifyEmail;
