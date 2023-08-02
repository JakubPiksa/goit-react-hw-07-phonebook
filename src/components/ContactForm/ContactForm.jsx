import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../../store/reducers/contacts';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux'; // Dodaj ten import
import css from './contactForm.module.css';

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector((state) => state.contacts); // Dodaj tę linię

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddContact({ id: nanoid(), name, number });
    setName('');
    setNumber('');

const newContacts = [...contacts, { id: nanoid(), name, number }];
    localStorage.setItem('contacts', JSON.stringify(newContacts));
  };
  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input
        className={css.formInput}
        type="text"
        name="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Name"
        pattern="^[a-zA-Zа-яА-Я]+([' -]?[a-zA-Zа-яА-Я ]?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces."
        required
      />
      <input
        className={css.formInput}
        type="tel"
        name="number"
        value={number}
        onChange={(event) => setNumber(event.target.value)}
        placeholder="Phone number"
        pattern="\d{1,9}"
        title="Phone number must contain numbers only"
        required
      />
      <button type="submit" className={css.button}>
        Add Contact
      </button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onAddContact: (contact) => dispatch(addContact(contact)),
});

export default connect(null, mapDispatchToProps)(ContactForm);