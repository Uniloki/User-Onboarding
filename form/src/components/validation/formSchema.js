import * as yup from 'yup'

const formSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email must be valid")
    .required("Email is required"),
  name: yup
    .string()
    .min(3, "Username must be at least 3 characters")
    .required("Username is Required"),
  password: yup
  .string()
  .min(3, "Password must be at least 3 characters"),
  hasRead: yup
  .boolean
})

export default formSchema
