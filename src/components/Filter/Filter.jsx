import { useDispatch } from 'react-redux';
import s from './Filter.module.css';
import { filterContact } from 'components/redux/filter.slice';
export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div className={s.wrapperFilter}>
      <p className={s.styleFindNameText}>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        onChange={event => dispatch(filterContact(event.target.value))}
        className={s.styleInputFilter}
      />
    </div>
  );
};
