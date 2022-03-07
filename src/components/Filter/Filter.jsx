import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/filter/filterAction';
import Search from '../search';

const Filter = () => {
  const filter = useSelector(({ filter }) => filter);
  const dispatch = useDispatch();

  const filterChanger = ({ currentTarget }) => {
    const filterValue = currentTarget.value;
    dispatch(actions.filterContacts(filterValue));
  };

  return <Search value={filter} onChange={e => filterChanger(e)} />;
};

export default Filter;
