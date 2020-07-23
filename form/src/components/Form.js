import React from 'react'
export default function Form(props) {
    
 const {update, submit, values, checkbox, errors} = props

 const onChange = evt => {
    const { name, value } = evt.target
    update(name, value)
  }
  const onCheckboxChange = evt => {
    const { name, checked } = evt.target
    checkbox(name, checked)
  }
    const onSubmit = evt => {
        evt.preventDefault()

        submit()
    }

return(
    <div>
        <div className='errors'>
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
        
        </div>
        <form onSubmit={onSubmit}>
            <label htmlFor='nameInput'> Name: </label>
            <input 
            id='nameInput'
            name='name'
            type='text'
            placeholder='Enter your name'
            maxLength= '25'
            onChange={onChange}
            value= {values.name}
            />
           
            <label htmlFor='emailInput'> Email: </label>
            <input 
            id='emailInput'
            name='email'
            type='email'
            placeholder='Enter your email'
            maxLength= '25'
            onChange={onChange}
            value= {values.email}
            />

            <label htmlFor='password'> Password: </label>
            <input 
            id='password'
            name='password'
            type='password'
            placeholder='Enter your password'
            maxLength= '25'
            onChange={onChange}
            value= {values.password}
            />     

        <label htlmFor='hasRead'> I have read the terms of service: </label>
        <input
            id='hasRead'
            name="hasRead"
            type="checkbox"
            checked={values.hasRead === true}
            onChange={onCheckboxChange}
            />
            <button>submit</button>
        </form>
    </div>
)
}


