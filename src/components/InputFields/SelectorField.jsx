import React from 'react';
import { useField } from 'formik';



export const SelectorField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error" style={{color: 'red'}}>{meta.error}</div>
      ) : null}
    </div>
  );
};


