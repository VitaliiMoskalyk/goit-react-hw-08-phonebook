import { TextField } from '@mui/material';

export default function EmailLabel({ value, onchange }) {
  return (
    <TextField
      id="e-mail"
      label="E-mail"
      value={value}
      variant="outlined"
      onChange={onchange}
      title="example@mail.com"
      type="mail"
      autoComplete="off"
      size="small"
      margin="normal"
      inputProps={{
        pattern: '^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[A-Za-z]+$',
      }}
      required
    />
  );
}
