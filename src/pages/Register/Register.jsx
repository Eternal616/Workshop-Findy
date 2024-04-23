import './Register.scss'
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';



const Register = () => {
  return (
    <div className="register-container">
      <h1>Register</h1>
      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        validationSchema={Yup.object({
          username: Yup.string().required('required field'),
          email: Yup.string().email('Email inválido').required('required field'),
          password: Yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('required field'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log('Valores enviados:', values);
          setSubmitting(false);
        }}
      >
        <Form className="register-form"> {/* Aquí asigna la clase register-form */}
          <div>
            <label htmlFor="username">Username</label>
            <Field type="text" name="username" />
            <ErrorMessage name="username" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;