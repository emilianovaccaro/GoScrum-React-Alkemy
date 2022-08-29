import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaTasks } from 'react-icons/fa';
import { Formik, Form } from 'formik';
import { TextField } from '../InputFields/TextField';
import * as Yup from 'yup';
import { SelectorField } from '../InputFields/SelectorField';


//Input validation
const validate = Yup.object().shape({
  title: Yup.string()
    .required("Title is required")
    .min(6, "Must contain at least 6 characters"),
  description: Yup.string()
    .required()   
    .min(20, "Please add at least 20 characters about this task"),
  priority: Yup.string()
    .required("Priority is required"),
  status: Yup.string()
    .required("Status is required")
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