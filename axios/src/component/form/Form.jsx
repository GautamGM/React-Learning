/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { postData,upDatePost } from "../../Api/postapi";
import { useEffect } from "react";
const FormForPost = ({ data, setData, isUpdated, setIsUpDated }) => {
  //  intial value for th form
  const initialValue = {
    title: "",
    body: "",
  };

  // useForm hook------->
  const { handleSubmit, reset, register, setValue } = useForm({
    defaultValues: initialValue,
  });

  // condital functions
  let isEmpty = Object.keys(isUpdated).length === 0;

  // --------------

  const updateData=async()=>{
    try{
      const res=upDatePost(isUpdated.id,isUpdated)
      console.log(res,"upadte value")
      setTimeout(() => {
        setIsUpDated({})
      }, 2000);
    }catch(err){
      console.log(err)
    }
  }
  const submitData = async (data2, event) => {
    const action = event.nativeEvent.submitter.value;
    if (action === "Add") {
      let lastId = data.length + 1;

      const newDta = { ...data2, id: lastId };

      try {
        const res = await postData(newDta);
        if (res.status === 201) {
          console.log("Entered IF");
          setData([...data, newDta]);
        }
        reset();
      } catch (err) {
        console.log(err);
      }

    }else if(action==="Edit"){
      updateData()
      console.log("else is runn")
    }
    
  };

  // updated the post
  useEffect(() => {
    if (isUpdated) {
      // reset({
      //   title:isUpdated.title ||"",
      //   body:isUpdated.body||"",
      // })
      setValue("title", isUpdated?.title ?? "");
      setValue("body", isUpdated?.body ?? "");
    }
  }, [isUpdated]);
  return (
    <div>
      <div className="flex justify-center border p-5">
        <form action="" className="p-2" onSubmit={handleSubmit(submitData)}>
          <label htmlFor="name">title</label>
          <input
            className="border border-black m-2"
            type="text"
            name="title"
            id="title"
            {...register("title", { required: true })}
          />
          <label htmlFor="post">body</label>
          <input
            className="border border-black m-2"
            type="text"
            name="body"
            id="body"
            {...register("body", { required: true })}
          />
          <button
            type="submit"
            className="border p-2 w-[100px] rounded bg-green-500"
            value={isEmpty ? "Add" : "Edit"}
          >
            {isEmpty ? "Add" : "Edit"}
          </button>
        </form>
      </div>
    </div>
  );
};
export default FormForPost;
