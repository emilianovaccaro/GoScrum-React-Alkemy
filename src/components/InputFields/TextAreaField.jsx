import React from 'react';
import { useField } from 'formik';


export const TextAreaField = (props) => {
  // this will return field exactly like <Field>{({ field }) => ... }</Field>
  const [field, meta] = useField(props);

  return (
    <>
      <div>
        <textarea {...field} {...props} />
        {meta.error && meta.touched && <div>{meta.error}</div>}
      </div>
    </>
  );
};