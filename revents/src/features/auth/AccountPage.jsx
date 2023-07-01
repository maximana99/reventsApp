import React from "react";
import { Button, Form, Header, Label, Segment } from "semantic-ui-react";
import { Formik } from "formik";
import * as Yup from "yup";
import MyTextInput from "../../app/common/form/MyTextInput";
import { useSelector } from "react-redux";
import { updateUserPassword } from "../../app/firestore/firebaseService";

export default function AccountPage() {
  const { currentUser } = useSelector((state) => state.auth);

  return (
    <Segment clearing>
      <Header dividing size='large' content='Cont' />
      {currentUser.providerId === "password" && (
        <>
          <Header color='teal' sub content='Change the password' />
          <p>Use this form to change your password</p>
          <Formik
            initialValues={{ newPassword1: "", newPassword2: "" }}
            validationSchema={Yup.object({
              newPassword1: Yup.string()
                .required("Password is required")
                .min(6, "Password must contain at least 6 characters"),
              newPassword2: Yup.string()
                .oneOf(
                  [Yup.ref("newPassword1"), null],
                  "Passwords do not match"
                )
                .required("Password confirmation is mandatory"),
            })}
            onSubmit={async (values, { setSubmitting, setErrors }) => {
              try {
                await updateUserPassword(values.newPassword1);
              } catch (error) {
                setErrors({ auth: error.message });
              } finally {
                setSubmitting(false);
              }
            }}
          >
            {({ errors, isSubmitting, isValid, dirty }) => (
              <Form className='ui form'>
                <MyTextInput
                  name='newPassword1'
                  type='password'
                  placeholder='Parolă Nouă'
                />
                <MyTextInput
                  name='newPassword2'
                  type='password'
                  placeholder='Confirmă Parola'
                />
                {errors.auth && (
                  <Label
                    basic
                    color='red'
                    style={{ marginBottom: 10 }}
                    content={errors.auth}
                  />
                )}
                <Button
                  style={{ display: "block" }}
                  type='submit'
                  disabled={!isValid || isSubmitting || !dirty}
                  loading={isSubmitting}
                  size='large'
                  positive
                  content='Actualizează Parola'
                />
              </Form>
            )}
          </Formik>
        </>
      )}
    </Segment>
  );
}
