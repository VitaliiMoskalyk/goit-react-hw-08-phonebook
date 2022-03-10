import { TextField } from '@mui/material';
import propTypes from 'prop-types';

export default function PhoneLabel({ value, onchange }) {
  return (
    <TextField
      id="phone"
      label="Phone"
      value={value}
      variant="outlined"
      onChange={onchange}
      title="+3805012345678"
      type="tel"
      autoComplete="off"
      size="small"
      margin="normal"
      placeholder="+3805012345678"
      inputProps={{
        pattern: '^\\+[\\(\\-]?(\\d[\\(\\)\\-]?){11}\\d$',
      }}
      required
    />
  );
}

PhoneLabel.prototype = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func,
};
