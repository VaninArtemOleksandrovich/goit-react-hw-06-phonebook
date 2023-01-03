import { useDispatch, useSelector } from 'react-redux';
import { changeFilterAction } from '../../redux/contacts/slice.filter';
import { getFilter } from 'redux/selectors';

import css from './Filter.module.css';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(changeFilterAction(e.target.value));
  };

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.full}
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilter}
      />
    </label>
  );
};
