import * as yup from "yup"

export const SimpleSchema=yup.object().shape({
    fname:yup.string().required("First name is required"),
    lname:yup.string().required("First name is required"),
    email:yup.string().email("Invalid Email").required("Email is required"),
    password:yup.string(),
    confirmPassword:yup.string().oneOf([yup.ref("password")],"password is not matched").required(),
    phone_Number:yup.string(),
    address:yup.string(),

})