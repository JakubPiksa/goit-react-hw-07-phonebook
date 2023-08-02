import React from 'react';
import { connect } from 'react-redux';
import { deleteContact } from '../../store/reducers/contacts';
import { useSelector } from 'react-redux'; 
import css from './contactList.module.css'


const ContactList = ({ onDeleteContact }) => {

  const filter = useSelector(state => state.filter);

  const contacts = useSelector(state => state.contacts);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.contactList}>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => onDeleteContact(contact.id)} className={css.delete}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (contactId) => dispatch(deleteContact(contactId)),
});

export default connect(null, mapDispatchToProps)(ContactList);
