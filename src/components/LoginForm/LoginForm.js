import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.formLabel}>
        Email
        <input className={css.formInput} 
        type="email" 
        name="email" 
        placeholder="Your e-mail"
        aria-label="Input for your email"
        required/>
      </label>

      <label className={css.formLabel}>
        Password
        <input className={css.formInput} 
        type="password" 
        name="password" 
        placeholder="Your password"
        aria-label="Input for your password"
        required/>
      </label>

      <button className={css.logInBtn} type="submit">
        Log In
      </button>
    </form>
  );
};