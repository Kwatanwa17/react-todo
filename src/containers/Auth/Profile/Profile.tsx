import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { ButtonWrapper, DeleteWrapper, Form, FormWrapper, Heading, Message, MessageWrapper } from '../../../elements';
import { Button, Input } from '../../../components';
import * as actions from '../../../store/actions';
import { Modal } from '../../../elements';

const ProfileSchema = Yup.object().shape({
  email: Yup.string().email('無効なメールアドレスです').required('必須項目です'),
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
  errorDelete,
  loadingDelete,
  successDelete,
  deleteUser,
  editProfile,
  cleanUp,
}) => {
  useEffect(() => {
    return async () => {
      // clean up messages
      await cleanUp();
    };
  }, [cleanUp]);

  const [modalOpened, setModalOpened] = useState(false);

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
                <Field type="email" name="email" placeholder="メールアドレス" component={Input} />
                <Field type="password" name="password" placeholder="パスワード" component={Input} />
                <Field type="password" name="confirmedPassword" placeholder="パスワード再入力" component={Input} />
                <Button type="submit" disabled={!isValid || isSubmitting} loading={loading ? 'お待ちください' : null}>
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
                <DeleteWrapper onClick={() => setModalOpened(true)}>アカウントを消去する</DeleteWrapper>
              </Form>
            </FormWrapper>
          );
        }}
      </Formik>
      <Modal opened={modalOpened} closed={() => setModalOpened(false)}>
        <Heading size="h1" margin="2rem" fontWeight={700}>
          注意
        </Heading>
        <p>本当に削除しますか？</p>
        <p>この操作は取り消せません</p>
        <ButtonWrapper>
          <Button
            contain
            onClick={() => deleteUser()}
            color="var(--color-error)"
            disabled={loadingDelete}
            loading={loadingDelete ? 'お待ちください' : null}
          >
            削除
          </Button>
          <Button color="var(--color-main)" contain onClick={() => cleanUp() && setModalOpened(false)}>
            キャンセル
          </Button>
        </ButtonWrapper>
        <MessageWrapper>
          <Message error show={errorDelete}>
            {errorDelete}
          </Message>
          <Message success show={successDelete === true}>
            変更されました
          </Message>
        </MessageWrapper>
      </Modal>
    </>
  );
};

const mapStateToProps = ({ firebase, auth }) => ({
  firebase,
  loading: auth.profileEdit.loading,
  error: auth.profileEdit.error,
  success: auth.profileEdit.success,
  loadingDelete: auth.deleteUser.loading,
  errorDelete: auth.deleteUser.error,
  successDelete: auth.deleteUser.success,
});

const mapDispatchToProps = {
  cleanUp: actions.cleanUp,
  deleteUser: actions.deleteUser,
  editProfile: actions.editProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
