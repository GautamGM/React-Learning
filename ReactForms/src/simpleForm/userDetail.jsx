import { useState } from "react";
// import { SimpleSchema } from "./simpleSchema";
// import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
const UserDetailWithoutReactHook = () => {
  const userDetail = {
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    phone_Number: "",
  };

  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    phone_Number: "",
  });

  const [errors, setError] = useState({});

  const SimpleSchema = yup.object().shape({
    fname: yup.string().required("First name is required"),
    lname: yup.string().required("Last name is required"),
    email: yup.string().email("Invalid Email").required("Email is required"),
    password: yup.string(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "password is not matched")
      .required(),
    phone_Number: yup.string(),
    address: yup.string(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await SimpleSchema.validate(user, { abortEarly: false });
      console.log("data is sucessfull", user);
    } catch (error) {
      console.log(error.inner)
      let newError = {};
      error.inner.forEach((err) => {
      return  newError[err.path] = err.message;
      });

      setError(newError);
    }
    
    setUser(userDetail)
  };
  

  return (
    <div>
      <h1 className=" text-[28px] font-[700] pt-4 border-b text-center  ">
        SIMPLE USER DETAIL : VALIDATION USING YUP .
      </h1>
      <div className="  border flex justify-center ">
        <form action=" " onSubmit={handleSubmit} className=" w-[50%]">
          <div>
            <div className="input-group m-5 flex flex-col text-[18px] ">
              <label htmlFor="" className="text-[24px] ">
                First Name
              </label>
              <input
                type="text"
                name="fname"
                onChange={handleChange}
                value={user.fname}
                className="border border-white shadow-sm shadow-white h-[40px] rounded p-1 text-black "
                placeholder="Enter your Name"
              />
              {errors.fname ? <p>therer is error {errors.fname} </p> : ""}
            </div>
            {/* end */}
            <div className="input-group m-5 flex flex-col text-[18px] ">
              <label htmlFor="" className="text-[24px] ">
                Last name{" "}
              </label>
              <input
                type="text"
                name="lname"
                onChange={handleChange}
                value={user.lname}
                className="border border-white shadow-sm shadow-white h-[40px] rounded p-1 text-black "
                placeholder="Enter your Name"
              />
              {errors.lname ? <p>therer is error {errors.lname} </p> : ""}
            </div>
            {/* end */}
            <div className="input-group m-5 flex flex-col text-[18px] ">
              <label htmlFor="" className="text-[24px] ">
                {" "}
                Email
              </label>
              <input
                type="text"
                name="email"
                onChange={handleChange}
                value={user.email}
                className="border border-white shadow-sm shadow-white h-[40px] rounded p-1 text-black "
                placeholder="Enter your Name"
              />
              {errors.email ? <p>therer is error {errors.email} </p> : ""}
            </div>
            {/* end */}
            <div className="input-group m-5 flex flex-col text-[18px] ">
              <label htmlFor="" className="text-[24px] ">
                Password
              </label>
              <input
                type="text"
                name="password"
                onChange={handleChange}
                value={user.password}
                className="border border-white shadow-sm shadow-white h-[40px] rounded p-1 text-black "
                placeholder="Enter your Name"
              />
              {errors.password ? <p>therer is error {errors.password} </p> : ""}
            </div>
            {/* end */}
            <div className="input-group m-5 flex flex-col text-[18px] ">
              <label htmlFor="" className="text-[24px] ">
                Confirm password
              </label>
              <input
                type="text"
                name="confirmPassword"
                onChange={handleChange}
                value={user.confirmPassword}
                className="border border-white shadow-sm shadow-white h-[40px] rounded p-1 text-black "
                placeholder="Enter your Name"
              />
              {errors.confirmPassword ? (
                <p>therer is error of {errors.confirmPassword}</p>
              ) : (
                ""
              )}
            </div>
            {/* end */}
            <div className="input-group m-5 flex flex-col text-[18px] ">
              <label htmlFor="" className="text-[24px] ">
                Address
              </label>
              <input
                type="text"
                name="address"
                onChange={handleChange}
                value={user.address}
                className="border border-white shadow-sm shadow-white h-[40px] rounded p-1 text-black "
                placeholder="Enter your Name"
              />
              {errors.address ? <p>therer is {errors.address}</p> : ""}
            </div>
            {/* end */}
            <div className="input-group m-5 flex flex-col text-[18px] ">
              <label htmlFor="" className="text-[24px] ">
                Phone Number
              </label>
              <input
                type="text"
                name="phone_Number"
                onChange={handleChange}
                value={user.phone_Number}
                className="border border-white shadow-sm shadow-white h-[40px] rounded p-1 text-black "
                placeholder="Enter your Name"
              />
              {errors.phone_Number ? (
                <p>therer is phone {errors.phone_Number}</p>
              ) : (
                ""
              )}
            </div>
            {/* end */}
          </div>
          <button className="w-[100px] border p-2 rounded-full m-5 bg-red-900 shadow-sm shadow-white">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default UserDetailWithoutReactHook;
