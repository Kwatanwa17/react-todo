import React, { useState } from 'react';
import { connect } from 'react-redux'
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { Button } from '../../../components';
import { ButtonWrapper, Form, FormWrapper, Heading, Message, MessageWrapper, Modal } from '../../../elements';
import { Input } from '../../../components';
import * as actions from '../../../store/actions';

const TodoSchema = Yup.object().shape({
  todo: Yup.string().required('必須項目です'),
});

const AddTodo = ({ addTodo, loading, error}) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <>
      <Button contain onClick={() => setIsOpened(true)}>
        Add TODOS
      </Button>
      <Modal opened={isOpened} closed={() => setIsOpened(false)}>
        <Heading size="h1" margin="2rem" fontWeight={700}>
          TODOを追加します
        </Heading>
        <p>内容を入力して、ボタンを押してください</p>
        <Formik
          initialValues={{
            todo: '',
          }}
          validationSchema={TodoSchema}
          onSubmit={async (values, { setSubmitting, resetForm}) => {
            const res = await addTodo(values);
            setSubmitting(false);
            if (res) {
              setIsOpened(false);
              resetForm();
            }
          }}
        >
          {({ isSubmitting, isValid, dirty }) => {
            return (
              <Form>
                <Field type="text" name="todo" placeholder="新しいTODO" component={Input} />
                <ButtonWrapper>
                  <Button
                    contain
                    type="submit"
                    disabled={!isValid || isSubmitting}
                    loading={loading? 'お待ちください' : null}
                  >
                    追加
                  </Button>
                  <Button color="var(--color-main)" contain onClick={() => setIsOpened(false)}>
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
  error: todos.error
});

const mapDispatchToProps = {
  addTodo: actions.addTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
