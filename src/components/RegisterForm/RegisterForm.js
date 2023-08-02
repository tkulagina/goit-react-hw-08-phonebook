import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.formLabel}>
        Username
        <input className={css.formInput} 
        type="text" 
        name="name"
        placeholder="Your name"
        aria-label="Input for your name"        
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required />
      </label>

      <label className={css.formLabel}>
        Email
        <input className={css.formInput} 
        type="email" 
        name="email"         
        placeholder="Your e-mail"
        aria-label="Input for your Email"
        required/>
      </label>

      <label className={css.formLabel}>
        Password
        <input className={css.formInput} 
        type="password" 
        name="password"         
        placeholder="Should be at least 7 characters"
        aria-label="Input for your password"
        required/>
      </label>

      <button className={css.registerBtn} type="submit">
        Register
      </button>
    </form>
  );
};
