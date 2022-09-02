import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { FaUserPlus, FaRegCheckSquare, FaRegSquare } from 'react-icons/fa';
import { Btn } from '../InputFields/ButtonStyle';
import { TextField } from '../InputFields/TextField';
import { SelectorField } from '../InputFields/SelectorField';
import { toast } from 'react-toastify';
import useFetchData from '../../hooks/useFetchData';


//Input validation
const validate = Yup.object().shape({
  username: Yup.string()
    .required("User is required")
    .min(6, "username must contain at least 6 characters")
    .test("isValid", "User can only contain letters", (value, context) => {
      const hasNumber = /[0-9]/.test(value);
      const hasSpecialChar = /["!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]/.test(value);

      let invalidConditions = 0;
      const actualConditions = [hasNumber, hasSpecialChar];

      actualConditions.forEach(condition => (
        condition ? invalidConditions++ : null
      ))

      if (invalidConditions === 0) {
        return true;
      }

      return false;
    }),
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string()
    .required("Password is required")
    .min(8, 'Password must be at least 8 characters')
    .test(
      "valid password",
      "Password must contain: number, uppercase letter, lowercase letter", 
      (value, context) => {
        const hasUpperCase = /[A-Z]/.test(value);
        const hasLowerCase = /[a-z]/.test(value);
        const hasNumber = /[0-9]/.test(value);

        const totalConditions = 3;
        let validConditions = 0;
        const actualConditions = [hasUpperCase, hasLowerCase, hasNumber];

        actualConditions.forEach(condition => (
          condition ? validConditions++ : null
        ))

        if (validConditions === totalConditions) {
          return true;
        }

        return false;
    }),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    role: Yup.string()
      .required(),
    continent: Yup.string()
      .required()
});

//initial values
const initialValues = {
  username: "",
  email: "",
  password: "",
  role: "",
  teamID: "",
  continent: "",
  region: "",
  confirmPassword: "",
};

const RegisterForm = () => {
  const navigate = useNavigate();
  const [ toggle, setToggle ] = useState(false);

  const data = useFetchData(`${process.env.REACT_APP_API_ENDPOINT}auth/data`);

  const onSubmit = async (values) => {
    values.teamID = !values.teamID ? uuidv4() : values.teamID;
    values.region = "Otro";

    const user = {
      userName: values.username,
      password: values.password,
      email: values.email,
      teamID: values.teamID,
      role: values.role,
      continent: values.continent,
      region: values.region,
    }

    try{
      const res = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}auth/register`, {user});

      if (res.status === 201) {
        toast(res.statusText);
        return navigate('/login');
      } 
    } catch (error) {
      console.log(error.response);
      if (error.response.status === 409) {
        return toast.error("Email is already in use / " + error.response.data.message);
      } else if (error.response.status === 401) {
        return toast.error("Password is incorrect / " + error.response.data.message);
      }

      return toast.error(error.response.data.message);
    }
  }
  

  return (
    <>
      <section className="heading">
        <h1>
          <FaUserPlus /> Sign Up
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
                <TextField placeholder="user" name="username" type="text" />
              </div>
              <div className="form-group">
                <TextField placeholder="email" name="email" type="email" />
              </div>
              <div className="form-group">
                <TextField placeholder="password" name="password" type="password" />
              </div>
              <div className="form-group">
                <TextField placeholder="confirm password" name="confirmPassword" type="password" />
              </div>
              
              {
                !toggle ? (
                  <div className="form-group">
                    <FaRegSquare 
                      onClick={() => setToggle(!toggle)}
                    />
                    <p>If you have a team ID, please check the box above</p>
                  </div>
                ) : (
                  <div className="form-group">
                     <FaRegCheckSquare 
                      onClick={() => setToggle(!toggle)}
                    />
                      <TextField 
                        label="Please enter your Team ID"
                        placeholder="Team ID"
                        name="teamID"
                        type="text"
                      />
                  </div>
                )
              }

              <div className="form-group">
                <SelectorField placeholder="role" name="role">
                  <option value="">Select Role</option>
                  {
                    data?.result?.Rol?.map(option => (
                      <option value={option} key={option}>{option}</option>
                    ))
                  }
                </SelectorField>
              </div>
              
              <div className="form-group">
                <SelectorField placeholder="continent" name="continent">
                  <option value="">Select Continent</option>
                  {
                    data?.result?.continente?.map(option => (
                      <option value={option} key={option}>{option}</option>
                    ))
                  }
                </SelectorField>
              </div>

              <div className="form-group">
                {
                  formik.values.continent === "America" && (
                    <>
                      <SelectorField placeholder="region" name="region">
                        <option value="">Select Region</option>
                        {
                          data?.result?.region?.map(option => (
                            <option value={option} key={option}>{option}</option>
                          ))
                        }
                      </SelectorField>
                    </>
                  ) 
                }
              </div>

              <div className="form-group">
                <Btn type="submit">
                  <div>Register</div>
                </Btn> 
              </div>

            </Form>
          </div>
        )}
      </Formik>
    </>
  )
}


export default RegisterForm;