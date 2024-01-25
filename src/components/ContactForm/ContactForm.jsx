import React, { useState } from 'react';
import s from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'components/redux/contacts.slice';
import { selectContacts } from 'components/redux/selectors';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const [contactForm, setContactForm] = useState({
    name: '',
    number: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setContactForm({ ...contactForm, [name]: value });
  };
  const handleSubmit = event => {
    event.preventDefault();
    const isExist = contacts.find(
      contact => contact.name.toLowerCase() === contactForm.name.toLowerCase()
    );
    if (isExist) {
      alert('already exist');
      return;
    }

    dispatch(addContacts(contactForm));
    setContactForm({ name: '', number: '' });
  };

  return (
    <form onSubmit={handleSubmit} className={s.styleForm}>
      <p className={s.styleName}>Name</p>
      <input
        type="text"
        required
        onChange={handleChange}
        name="name"
        value={contactForm.name}
        className={s.styleInput}
      />
      <p className={s.styleNumber}>Number</p>
      <input
        type="tel"
        name="number"
        required
        onChange={handleChange}
        value={contactForm.number}
        className={s.styleInput}
      />
      <button type="submit" className={s.styleButton}>
        Add contact
      </button>
    </form>
  );
};
