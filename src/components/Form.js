import { useForm } from "react-hook-form";

import styles from "../style";

const Form = ({ theme }) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = data => console.log(data);

  // const enteredName = watch("nameRequired");
  // const enteredEmail = watch("emailRequired");
  // const enteredFile = watch("fileRequired");

  // console.log(enteredName, enteredFile, enteredEmail)

  const textColor = theme === "dark" ? styles.darkColor : styles.lightColor;
  const inputBg = theme === "dark" ? styles.darkInputBg : styles.lightInputBg;

  return (
    <section className={`p-8 w-screen h-screen ${theme === "dark" ? styles.darkMain : styles.lightMain}`}>
      <p className={`pb-6 mt-4 font-bold text-center text-xl ${textColor}`}>Use the form below to upload your file</p>

      <form className={`w-[60%] p-6 pb-8 my-0 mx-[auto] border-gray-800 shadow-lg shadow-black/40 ${theme === "dark" ? styles.darkForm : styles.lightForm} rounded-[20px]`} onSubmit={handleSubmit(onSubmit)}>

        <div className="pb-6">
          <label htmlFor="name" className={`${styles.label} ${textColor}`}>Your name</label>
          <input type="text" id="name" {...register("nameRequired", { required: true })} className={`${styles.input} ${inputBg}`}/>
          {errors.nameRequired && <span className={styles.span}>This field is required</span>}
        </div>

        <div className="pb-6">
          <label htmlFor="email" className={`${styles.label} ${textColor}`}>Your email</label>
          <input type="email" id="email" {...register("emailRequired", { required: true })} className={`${styles.input} ${inputBg}`}/>
          {errors.emailRequired && <span className={styles.span}>This field is required</span>}
        </div>

        <div className="pb-6">
          <label htmlFor="file" className={`${styles.label} ${textColor}`}>Upload your file</label>
          <input type="file" id="file" {...register("fileRequired", { required: true })} className={`${styles.input} ${inputBg}`}/>
          {errors.fileRequired && <span className={styles.span}>This field is required</span>}
        </div>

        <div className="flex justify-center">
          <button className={`block w-[50%] ml-5 mr-0 my-[auto] py-2 px-8 border border-[whitesmoke] rounded-[25px] text-[whitesmoke] ${styles.buttonBg}`}>Submit</button>
        </div>
      
      </form>

    </section>
  );
};

export default Form;