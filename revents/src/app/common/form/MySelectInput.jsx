import React from "react";
import { useField } from "formik";
import { FormField, Label, Select } from "semantic-ui-react";

export default function MySelectInput({ label, ...props }) {
  const [field, meta, helpers] = useField(props);
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
      <Select
        clearable
        value={field.value || null}
        onChange={(e, d) => helpers.setValue(d.value)}
        onBlur={() => helpers.setTouched(true)}
        {...props}
        style={{
          width: "980px",
          padding: "10px",
          marginTop: "10px",

          border: "2px solid",
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
