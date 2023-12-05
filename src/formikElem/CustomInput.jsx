import React from 'react';
import { useField } from 'formik';

const CustomInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input {...field} {...props} />
            {meta.touched && meta.error && <div style={{ color: 'red' }}>{meta.error}</div>}
        </div>
    );
};

export default CustomInput;