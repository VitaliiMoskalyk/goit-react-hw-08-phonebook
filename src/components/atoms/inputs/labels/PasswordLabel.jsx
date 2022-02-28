import { TextField } from '@mui/material';

export default function PasswordLabel({ value, onchange }) {
  return (
    <TextField
      id="password"
      label="Password"
      value={value}
      variant="outlined"
      onChange={onchange}
      title="********"
      type="password"
      autoComplete="off"
      size="small"
      margin="normal"
      // inputProps={{
      //   pattern: '^\\+[\\(\\-]?(\\d[\\(\\)\\-]?){11}\\d$',
      //   // '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}',
      // }}
      required
    />
  );
}
