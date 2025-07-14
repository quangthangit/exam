import { useForm } from "react-hook-form";
import styles from './styles.module.css';

interface IFormInputs {
  name: string;
  email: string;
  address: string;
}

const BuyerForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({ mode: "onChange" });

  const onSubmit = (data: IFormInputs) => {
    console.log(data.address);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
      <div className={styles.inputGroup}>
        <label className={styles.label}>Name:</label>
        <input
          type="text"
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 2,
              message: "Minimum 2 characters",
            },
          })}
          className={styles.input}
        />
        {errors.name && <p className={styles.error}>{errors.name.message}</p>}
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>Email:</label>
        <input
          type="text"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email",
            },
          })}
          className={styles.input}
        />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>Address:</label>
        <input
          type="text"
          {...register("address", {
            required: "Address is required",
            minLength: {
              value: 5,
              message: "Minimum 5 characters",
            },
          })}
          className={styles.input}
        />
        {errors.address && <p className={styles.error}>{errors.address.message}</p>}
      </div>

      <button type="submit" className={styles.submitButton}>Submit</button>
    </form>
  );
};

export default BuyerForm;
