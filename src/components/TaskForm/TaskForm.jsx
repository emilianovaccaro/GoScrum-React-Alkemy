import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaTasks } from 'react-icons/fa';
import { Formik, Form } from 'formik';
import { TextField } from '../InputFields/TextField';
import * as Yup from 'yup';
import { SelectorField } from '../InputFields/SelectorField';


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
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

//initial values
const initialValues = {
  title: "",
  description: "",
  priority: "",
  status: "",
};


const TaskForm = () => {
  const navigate = useNavigate();
  
  
  const onSubmit = (values) => {
    console.log(values);
  }
  

  return (
    <>

      <section className="heading">
        <h1>
          <FaTasks /> Task editor
        </h1>
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
                <TextField placeholder="title" name="title" type="text" />
              </div>

              <div className="form-group">
                <TextField placeholder="description" name="description" type="text" />
              </div>

              <div className="form-group">
                <SelectorField placeholder="priority" name="priority">
                  <option value="">Priority</option>
                  <option value="low">Low</option>
                  <option value="mid">Mid</option>
                  <option value="high">High</option>
                </SelectorField>
              </div>

              <div className="form-group">
                <SelectorField placeholder="status" name="status">
                  <option value="">Status</option>
                  <option value="new">New</option>
                  <option value="inprogress">In Progress</option>
                  <option value="finished">Finished</option>
                </SelectorField>
              </div>

              <div className="form-group">
                <button className="btn btn-block" type="submit">Create</button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </>
  )
}


export default TaskForm;