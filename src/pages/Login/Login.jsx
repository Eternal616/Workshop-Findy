import './Login.scss'
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const Login = () => {
  return (
    <div className="login-container">
      <h1>Login</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string().email('Email inválido').required('Campo requerido'),
          password: Yup.string().required('Campo requerido'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log('Valores enviados:', values);
          setSubmitting(false);
        }}
      >
        <Form className="login-form">
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
          <button type="submit">Iniciar sesión</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;