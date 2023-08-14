import css from '../ContactsList/contactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilters } from 'redux/selectors';
import { removeContact } from 'redux/phonebookReducer';
const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilters);
  const dispatch = useDispatch();

  const removeContactById = id => {
    const contactId = id;
    dispatch(
      removeContact(contacts.filter(contact => contact.id !== contactId))
    );
  };

  const filterContacts = () => {
    return contacts.filter(
      contact =>
        contact.name &&
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const filteredContacts = filterContacts();

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button
            type="button"
            onClick={() => removeContactById(contact.id)}
            style={{ marginLeft: '10px' }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;