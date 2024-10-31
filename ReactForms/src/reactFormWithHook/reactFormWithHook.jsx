import {useForm}  from  "react-hook-form"
import "./formWithHook.css";
const ReactFormWithHook = () => {
  const {register,handleSubmit,formState:{errors}}=useForm({
    defaultValues:{
      First_name:"",
      Last_name:"",
      Email:"",
      Address:""
    }
  })
  const onFormSubmit=(data)=>{
    console.log(data)
    console.log("hllo")
  } 
  
  console.log(errors,"eropr")
  return (
    <div className="bg-black text-[white] ">
      <div className="form-container  h-screen w-full flex flex-col justify-center items-center borde border-white]">
        <h1 className="p-5 mb-[30px] text-[28px] font-[700]">
          FORM WITH REACT-<span className="text-[#64ffda]">(useForm() )</span>
          -HOOK
        </h1>
        <form
          action=""
          className="green-form  w-[350px] min-h-[500px] rounded-[30px] flex justify-center items-center flex-col "
          onSubmit={handleSubmit(onFormSubmit)}
        >
          <div className="inner-div-form">
            <h1 className="text-[24px] font-[600] text-center ">
              Get In Touch
            </h1>
            <div className="input-group">
              <input
                type="text"
                placeholder="First_name"
                className=" w-[300px]  rounded pl-[10px] bg-inherit mt-[20px]    h-[35px] text-[grey]  border    "
                {...register("First_name",{required:"First anem is required"})}
              />
             <p>{errors.First_name?errors.First_name.message :""  }</p>
            </div>
           
            <div className="input-group">
              <input
                type="text"
                placeholder="Last_name"
                className=" w-[300px]  pl-[10px] bg-inherit mt-[20px]  h-[35px] text-[grey]  border    rounded"
                {...register("Last_name",{required:"last anem is required"})}
              />
            <p>{errors.Last_name ? errors.Last_name.message : ""  }</p>
            </div>
            {/* --------------------------------------------------- */}
            <div className="input-group">
              <input
                type="text"
                placeholder="Email"
                className=" w-[300px]   pl-[10px] bg-inherit mt-[20px]  h-[35px] text-[grey]  border    rounded"
                {...register("Email",{required:"email is required"})}
              />
             <p>{errors.Email?.message}</p>
            </div>
            {/* --------------------------------------------------- */}
            <div className="input-group">
              <input
                type="text"
                placeholder="Address"
                className=" w-[300px]   pl-[10px] bg-inherit mt-[20px]  h-[35px] text-[grey]  border rounded"
                {...register("Address")}
              />
          <p>{errors.Address?errors.Address.message :""  }</p>
            </div>
            {/* --------------------------------------------------- */}
          </div>
          <button disabled={Object.keys(errors).length>0?true:false}  type="submit" className="p-2 w-[300px] mt-[25px] border  rounded-[10px] text-[18px] font-[600] ">
            Submit Message
          </button>
        </form>
      </div>
    </div>
  );
};
export default ReactFormWithHook;
