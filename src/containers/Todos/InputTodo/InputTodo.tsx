import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { Button } from '../../../components';
import { ButtonWrapper, Form, FormWrapper, Heading, Message, MessageWrapper, Modal } from '../../../elements';
import { Input } from '../../../components';
import * as actions from '../../../store/actions';

const TodoSchema = Yup.object().shape({
  todo: Yup.string().required('必須項目です'),
});

const InputTodo = ({ close, opened, addTodo, isEditTodo, loading, error, todo, editTodo }) => {
  return (
    <>
      <Modal opened={opened} closed={close}>
        <Heading size="h1" margin="2rem" fontWeight={700}>
          {isEditTodo ? 'TODOを編集します' : 'TODOを追加します'}
        </Heading>
        <Heading size="h4" margin="2rem" fontWeight={400}>
          内容を入力して、ボタンを押してください
        </Heading>
        <Formik
          initialValues={{
            todo: isEditTodo ? isEditTodo.todo : '',
          }}
          validationSchema={TodoSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            const res = isEditTodo ? await editTodo(isEditTodo.id, values) : await addTodo(values);
            setSubmitting(false);
            if (res) {
              close();
              resetForm();
            }
          }}
        >
          {({ isSubmitting, isValid, dirty, resetForm }) => {
            return (
              <Form>
                <Field type="text" name="todo" placeholder="新しいTODO" component={Input} />
                <ButtonWrapper>
                  <Button
                    contain
                    type="submit"
                    disabled={!isValid || isSubmitting}
                    loading={loading ? 'お待ちください' : null}
                  >
                    {isEditTodo ? '編集を保存' : '追加'}
                  </Button>
                  <Button
                    type="button"
                    color="var(--color-main)"
                    contain
                    onClick={() => {
                      close();
                      resetForm();
                    }}
                  >
                    キャンセル
                  </Button>
                </ButtonWrapper>
                <MessageWrapper>
                  <Message error show={error}>
                    {error}
                  </Message>
                  {/* <Message success show={success === true}>
                    変更されました
                  </Message> */}
                </MessageWrapper>
              </Form>
            );
          }}
        </Formik>
        <MessageWrapper>
          <Message error></Message>
          <Message success>変更されました</Message>
        </MessageWrapper>
      </Modal>
    </>
  );
};

const mapStateToProps = ({ todos }) => ({
  loading: todos.loading,
  error: todos.error,
});

const mapDispatchToProps = {
  addTodo: actions.addTodo,
  editTodo: actions.editTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(InputTodo);
