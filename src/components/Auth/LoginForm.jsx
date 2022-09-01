import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';
import { Formik, Form } from 'formik';
import { TextField } from '../InputFields/TextField';
import { Btn } from '../InputFields/ButtonStyle';
import * as Yup from 'yup';
import useLoggedIn from '../../hooks/useLoggedIn';


//Input validation
const validate = Yup.object().shape({
  username: Yup.string()
    .required("User is required"),
  password: Yup.string()
    .required("Password is required"),
});

//initial values
const initialValues = {
  username: "",
  password: "",
};


const LoginForm = () => {
  const navigate = useNavigate();
  
  const onSubmit = async (values) => {
    const user = {
      userName: values.username, 
      password: values.password,
    }  

    try{
      const res = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}auth/login`, user);
      if (res.status === 200) {
        toast("Welcome " + res.data.result.user.userName);
        localStorage.setItem("token", res.data.result.token);
        localStorage.setItem("userName", res.data.result.user.userName);
        return navigate('/');
      }
    } catch (error) {
      console.log(error.response.data);
      return toast.error("User not found / " + error.response.data.message)
    }
  }
  

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Sign In 
        </h1>
        <p>Go Scrum Platform</p>
      </section>  

      <Formik
        initialValues={initialValues}
        validationSchema={validate}
        onSubmit={(values) => onSubmit(values)}
      >
        {formik => (
          <div className="form">
            <Form>

              <div className="form-group">
                <TextField placeholder="User" name="username" type="text" />
              </div>

              <div className="form-group">
                <TextField placeholder="Password" name="password" type="password" />
              </div>

              <div className="form-group">
                <Btn type="submit">
                  <div>Sign In</div>
                </Btn> 
              </div>

            </Form>
          </div>
        )}
      </Formik>
    </>
  )
}


export default LoginForm;