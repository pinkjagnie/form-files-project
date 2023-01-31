import { useForm } from "react-hook-form";

import styles from "./form.module.css";

const Form = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = data => console.log(data);

  // const enteredName = watch("nameRequired");
  // const enteredEmail = watch("emailRequired");
  // const enteredFile = watch("fileRequired");

  // console.log(enteredName, enteredFile, enteredEmail)

  return (
    <section className={styles.formSection}>
      <p>Use the form below to upload your file</p>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.control}>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" {...register("nameRequired", { required: true })} />
          {errors.nameRequired && <span>This field is required</span>}
        </div>
        <div className={styles.control}>
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" {...register("emailRequired", { required: true })}/>
          {errors.emailRequired && <span>This field is required</span>}
        </div>
        <div className={styles.control}>
          <label htmlFor="file">Upload your file</label>
          <input type="file" id="file" {...register("fileRequired", { required: true })}/>
          {errors.fileRequired && <span>This field is required</span>}
        </div>
        <button>Submit</button>
      </form>

    </section>
  );
};

export default Form;