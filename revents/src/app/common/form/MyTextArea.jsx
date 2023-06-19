import React from "react";
import { useField } from "formik";
import { FormField, Label } from "semantic-ui-react";

export default function MyTextArea({ label, ...props }) {
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
      }}
      error={meta.touched && !!meta.error}
    >
      <label>{label}</label>
      <textarea
        {...field}
        {...props}
        style={{
          height: "100px", // Setează înălțimea dorită
          border: "2px solid", // Setează stilul bordurii
          borderColor: "black", // Setează culoarea bordurii
          borderRadius: "5px",
          width: "980px",
          padding: "10px",
          marginTop: "10px",
        }}
      />
      {meta.touched && meta.error ? (
        <Label basic color='red'>
          {meta.error}
        </Label>
      ) : null}
    </FormField>
  );
}
