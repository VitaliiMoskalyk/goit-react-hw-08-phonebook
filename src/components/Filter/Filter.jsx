import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/contacts/action';
import { Search, StyledInputBase } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(({ filter }) => filter);
  const dispatch = useDispatch();

  const filterChanger = ({ currentTarget }) => {
    const filterValue = currentTarget.value;
    dispatch(actions.filterContacts(filterValue));
  };

  return (
    <>
      <Search>
        <StyledInputBase
          type="text"
          placeholder="Search"
          value={filter}
          onChange={e => filterChanger(e)}
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
    </>
  );
};

export default Filter;
