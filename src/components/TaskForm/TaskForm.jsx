import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaTasks } from 'react-icons/fa';
import { Formik, Form } from 'formik';
import { Btn } from '../InputFields/ButtonStyle';
import { TextField } from '../InputFields/TextField';
import * as Yup from 'yup';
import { SelectorField } from '../InputFields/SelectorField';
import { toast } from 'react-toastify';


//Input validation
const validate = Yup.object().shape({
  title: Yup.string()
    .required("Title is required")
    .min(6, "Must contain at least 6 characters"),
  description: Yup.string()
    .required("Description is required")   
    .min(20, "Please add at least 20 characters about this task"),
  importance: Yup.string()
    .required("importance is required"),
  status: Yup.string()
    .required("Status is required")
});

//initial values
const initialValues = {
  title: "",
  description: "",
  importance: "",
  status: "",
};


const TaskForm = () => {
  const navigate = useNavigate();
  
  const onSubmit = async (values) => {
    const task = {
      title: values.title,
      description: values.description,
      importance: values.importance,
      status: values.status,
    }

    try{
      const res = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}task/`, {task}, {
        headers:{
          "content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });

      if (res.status) {
        toast("STATUS: " + res.statusText + ", CREATED: " + values.title);
        return navigate('/tasks');
      }
    } catch (error) {
      console.log(error.response.data);
      return toast.error(error.response.data.message)
    }
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
                <SelectorField placeholder="importance" name="importance">
                  <option value="">Importance</option>
                  <option value="LOW">Low</option>
                  <option value="MEDIUM">Medium</option>
                  <option value="HIGH">High</option>
                </SelectorField>
              </div>

              <div className="form-group">
                <SelectorField placeholder="status" name="status">
                  <option value="">Status</option>
                  <option value="NEW">New</option>
                  <option value="IN PROGRESS">In Progress</option>
                  <option value="FINISHED">Finished</option>
                </SelectorField>
              </div>

              <div className="form-group">
                <Btn type="submit">
                  <div>Create</div>
                </Btn> 
              </div>

            </Form>
          </div>
        )}
      </Formik>
    </>
  )
}


export default TaskForm;