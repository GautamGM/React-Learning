import { useState } from "react";
import { SimpleSchema } from "./simpleSchema";
// import { Controller, useForm } from "react-hook-form";

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

  const [user, setUser] = useState(userDetail);
  const [errors,setError]=useState("")

//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
// } = useForm({
//     resolver: yupResolver(SimpleSchema),
//     mode: "onChange",
//     defaultValues: userDetail,
// });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(SimpleSchema)
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
