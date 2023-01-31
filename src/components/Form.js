import styles from "./form.module.css";

const Form = () => {

  return (
    <section className={styles.formSection}>
      <p>Use the form below to upload your file</p>

      <form className={styles.form}>
        <div className={styles.control}>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" />
        </div>
        <div className={styles.control}>
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" />
        </div>
        <div className={styles.control}>
          <label htmlFor="file">Upload your file</label>
          <input type="file" id="file" />
        </div>
        <button>Submit</button>
      </form>

    </section>
  );
};

export default Form;