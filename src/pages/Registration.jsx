import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import '../CSS/RegistrationForm.css';

const RegistrationSchema = Yup.object().shape({
    firstName: Yup.string().min(3, "Your first name must be 3 chars or longer").required("Required"),
    lastName: Yup.string().max(40, "Your last name must be 40 chars or shorter").required("Required"),
    email: Yup.string().email("Invalid Email").required("Required"),
    password: Yup.string().matches(/^(?=.*[A-Z])(?=.*[^\w\d\s:])(.{6,})$/, 'Wrong passwords').required("Required"),
    number: Yup.number().typeError("Must be a number").min(3, "Min 3").max(100, "Max 100").required("Required")
});

const RegistrationForm = () => {
    const handleSubmit = (values) => {
        console.log('form submitted', values);
    };

    return (
        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: "",
            }}
            validationSchema={RegistrationSchema}
            onSubmit={handleSubmit}
        >
            <Form className="registration-form">
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <Field type="text" id="firstName" name="firstName" />
                    <ErrorMessage name="firstName" component="div" className="error-message" />
                </div>

                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <Field type="text" id="lastName" name="lastName" />
                    <ErrorMessage name="lastName" component="div" className="error-message" />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Field type="text" id="email" name="email" />
                    <ErrorMessage name="email" component="div" className="error-message" />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <Field type="password" id="password" name="password" />
                    <ErrorMessage name="password" component="div" className="error-message" />
                </div>

                <div className="form-group">
                    <label htmlFor="number">Number</label>
                    <Field type="string" id="number" name="number" />
                    <ErrorMessage name="number" component="div" className="error-message" />
                </div>

                <div className="form-group">
                    <button type="submit">Register</button>
                </div>
            </Form>
        </Formik>
    );
};

export default RegistrationForm;
