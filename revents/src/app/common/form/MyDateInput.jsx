import React from "react";
import { useField, useFormikContext } from "formik";
import { FormField, Label } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function MyDateInput({ label, ...props }) {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(props);
  return (
    <FormField
      name='title'
      placeholder='Event title'
      className='custom-input'
      style={{
        width: "1000px",
        padding: "10px",
        marginTop: "10px",
        display: "flex", // Afiseaza coloanele una langa alta
        alignItems: "center",
      }}
      error={meta.touched && !!meta.error}
    >
      <label>{label}</label>
      <DatePicker
        {...field}
        {...props}
        selected={(field.value && new Date(field.value)) || null}
        onChange={(value) => setFieldValue(field.name, value)}
      />

      {meta.touched && meta.error ? (
        <Label basic color='red'>
          {meta.error}
        </Label>
      ) : null}
    </FormField>
  );
}
