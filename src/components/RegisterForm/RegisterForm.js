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
        //className={css.input}
        //value={name}
        //onChange={hanldeChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required />
      </label>

      <label className={css.formLabel}>
        Email
        <input className={css.formInput} 
        type="email" 
        name="email" 
        //value={email}
        //onChange={hanldeChange}
        //className={css.input}
        placeholder="Your e-mail"
        aria-label="Input for your Email"
        required/>
      </label>

      <label className={css.formLabel}>
        Password
        <input className={css.formInput} 
        type="password" 
        name="password" 
        //value={password}
        //onChange={hanldeChange}
        //className={css.input}
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

/* import PropTypes from 'prop-types';
import { useState } from 'react';
import { connect } from 'react-redux';

import { authOperations } from '../../redux/auth';

import styles from './RegisterForm.module.scss';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const RegisterForm = ({ onRegister }) => {
  const [state, setState] = useState(initialState);
  const { name, email, password } = state;

  const hanldeChange = event => {
    const { name, value } = event.target;

    setState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const hanldeSubmit = event => {
    event.preventDefault();

    onRegister(state);

    resetForm();
  };

  const resetForm = () => {
    setState(initialState);
  };

  return (
 <form className={styles.form} onSubmit={hanldeSubmit}>
      <label className={styles.label}>
        <span className={styles.text}>Name</span>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          aria-label="Input for your name"
          className={styles.input}
          value={name}
          onChange={hanldeChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>

      <label className={styles.label}>
        <span className={styles.text}>Email</span>
        <input
          type="email"
          name="email"
          value={email}
          onChange={hanldeChange}
          className={styles.input}
          placeholder="Your e-mail"
          aria-label="Input for your Email"
          required
        />
      </label>

      <label className={styles.label}>
        <span className={styles.text}>Password</span>
        <input
          type="password"
          name="password"
          value={password}
          onChange={hanldeChange}
          className={styles.input}
          placeholder="Should be at least 7 characters"
          aria-label="Input for your password"
          required
        />
      </label>

      <div className={styles.container}>
        <button type="submit" className={styles.button}>
          Create account
        </button>
      </div>
    </form>
  );
};
*/