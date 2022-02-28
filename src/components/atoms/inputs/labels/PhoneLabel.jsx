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
        // '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}',
      }}
      required
    />
  );
}