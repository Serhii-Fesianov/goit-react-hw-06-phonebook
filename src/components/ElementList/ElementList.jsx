import { deleteContacts } from 'components/redux/contacts.slice';
import s from './ElementList.module.css';
import { useDispatch } from 'react-redux';
export const ElementList = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <li className={s.styleElementList}>
      <p>{contact.name}</p>
      <p>{contact.number}</p>
      <button
        type="button"
        onClick={() => dispatch(deleteContacts(contact.id))}
        className={s.styleButtonItem}
      >
        Delete
      </button>
    </li>
  );
};
