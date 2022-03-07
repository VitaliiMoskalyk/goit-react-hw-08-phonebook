import { Search, StyledInputBase } from './SearchInput.styled';
import propTypes from 'prop-types';

function SearchInput({ value, onChange }) {
  return (
    <Search>
      <StyledInputBase
        type="text"
        placeholder="Search"
        value={value}
        onChange={onChange}
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  );
}
SearchInput.prototype = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func,
};

export default SearchInput;
