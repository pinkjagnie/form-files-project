import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = data => console.log(data);

  // const enteredName = watch("nameRequired");
  // const enteredEmail = watch("emailRequired");
  // const enteredFile = watch("fileRequired");

  // console.log(enteredName, enteredFile, enteredEmail)

  return (
    <section className="p-8 w-screen h-screen bg-[#221f23]">
      <p className="pb-6 mt-4 font-bold text-center text-[whitesmoke]">Use the form below to upload your file</p>

      <form className="w-[60%] p-6 pb-8 my-0 mx-[auto] border border-[whitesmoke] rounded-[20px] bg-[#1f2b37]" onSubmit={handleSubmit(onSubmit)}>

        <div className="pb-6">
          <label htmlFor="name" className="block font-bold ml-6 mt-4 mr-2 mb-2 text-[whitesmoke]">Your name</label>
          <input type="text" id="name" {...register("nameRequired", { required: true })} className="block w-[95%] mx-2 my-[auto] p-2 border border-[#ccc] rounded-[10px] focus:outline-none focus:border-[#656565]"/>
          {errors.nameRequired && <span className="pl-24 font-bold text-[lightcoral]">This field is required</span>}
        </div>

        <div className="pb-6">
          <label htmlFor="email" className="block font-bold ml-6 mt-2 mr-2 mb-2 text-[whitesmoke]">Your email</label>
          <input type="email" id="email" {...register("emailRequired", { required: true })} className="block w-[95%] mx-2 my-[auto] p-2 border border-[#ccc] rounded-[10px] focus:outline-none focus:border-[#656565]"/>
          {errors.emailRequired && <span className="pl-24 font-bold text-[lightcoral]">This field is required</span>}
        </div>

        <div className="pb-6">
          <label htmlFor="file" className="block font-bold ml-6 mt-2 mr-2 mb-2 text-[whitesmoke]">Upload your file</label>
          <input type="file" id="file" {...register("fileRequired", { required: true })} className="block w-[95%] mx-2 my-[auto] p-2 border border-[#ccc] rounded-[10px] focus:outline-none focus:border-[#656565]"/>
          {errors.fileRequired && <span className="pl-24 font-bold text-[lightcoral]">This field is required</span>}
        </div>

        <div className="flex justify-center">
          <button className="block w-[50%] ml-5 mr-0 my-[auto] py-2 px-8 border border-[whitesmoke] rounded-[25px] bg-[#656565] text-[whitesmoke] text-xl font-bold hover:bg-[darkolivegreen]">Submit</button>
        </div>
      
      </form>

    </section>
  );
};

export default Form;