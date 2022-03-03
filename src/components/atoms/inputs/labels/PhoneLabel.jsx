import { TextField } from '@mui/material';

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
      inputProps={{
        pattern: '^\\+[\\(\\-]?(\\d[\\(\\)\\-]?){11}\\d$',
      }}
      required
    />
  );
}
