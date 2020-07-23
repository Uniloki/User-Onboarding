import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form'
import Card from './components/Card'
import axios from 'axios'
import * as yup from 'yup'
import formSchema from './components/validation/formSchema'
const initialFormValues = {
  name: '',
  email: '',
  password: '',
  hasRead: false
}



function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [users, setUser] = useState([])
  const [formErrors, setFormErrors] = useState('')

// const updateForm = (inputName, InputValue) => {

//   setFormValues({...formValues,[inputName]: InputValue})
// }

const submitForm = () => {
  const newUser =
  {
    name: formValues.name.trim(),
    email: formValues.email.trim(),
    password: formValues.password,
    hasRead: formValues.hasRead
  }

  axios.post('https://reqres.in/api/users', newUser)
  .then(res => {
    const usersFromApi = res.data
    setUser([usersFromApi, ...users])
    setFormValues(initialFormValues)
  })
 }

 const checkboxChange = (name, value) => {
  setFormValues({
    ...formValues,
    [name]: value
  })
 }

 const inputChange = (name, value) => {

  yup
    .reach(formSchema, name)
  
    .validate(value)
  
    .then(valid => {
      setFormErrors({
        ...formErrors,
        [name]: "",
      })
    })

    .catch(err => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0],
      })
    })
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  return (
    <div>
      <Form update={inputChange} checkbox={checkboxChange} submit={submitForm} values={formValues} errors={formErrors}/>

      {
        users.map(user => {
          return(
          <Card  details={user}/>
          )
        })
      }
    </div>
  );
}

export default App;
