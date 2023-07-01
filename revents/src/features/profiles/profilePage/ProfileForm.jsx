import { Formik, Form } from "formik";
import { Button } from "semantic-ui-react";
import MyTextInput from "../../../app/common/form/MyTextInput";
import MyTextAreaSecond from "../../../app/common/form/MyTextAreaSecond";
import * as Yup from "yup";
import { updateUserProfile } from "../../../app/firestore/firestoreService";
import { toast } from "react-toastify";

export default function ProfileForm({ profile }) {
  const initialValues = {
    displayName: profile.displayName,
    description: profile.description || "",
  };

  const validationSchema = Yup.object({
    displayName: Yup.string().required(),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await updateUserProfile(values);
      toast.success("Profilul a fost actualizat!");
    } catch (error) {
      toast.error(error.message);
    } finally {
      resetForm();
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, isValid, dirty }) => (
        <Form className='ui form'>
          <MyTextInput
            name='displayName'
            placeholder='Nume de afișare'
            style={{ width: "580px" }}
          />
          <MyTextAreaSecond name='description' placeholder='Descriere' />
          <Button
            loading={isSubmitting}
            disabled={isSubmitting || !isValid || !dirty}
            floated='right'
            type='submit'
            size='large'
            positive
            content='Actualizează Profilul'
          />
        </Form>
      )}
    </Formik>
  );
}
