import { Search, StyledInputBase } from './SearchInput.styled';

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

export default SearchInput;
