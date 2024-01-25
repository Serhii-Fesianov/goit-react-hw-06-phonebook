import { ElementList } from 'components/ElementList/ElementList';
import s from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'components/redux/selectors';

export const ContactList = () => {
  const contactList = useSelector(selectFilteredContacts);
  return (
    <ul className={s.styleContactList}>
      {contactList.map(contact => {
        return <ElementList key={contact.id} contact={contact} />;
      })}
    </ul>
  );
};
