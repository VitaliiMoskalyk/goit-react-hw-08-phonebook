import { TextField } from '@mui/material';

export default function NameLabel({ value, onchange }) {
  return (
    <TextField
      id="name"
      label="Name"
      value={value}
      variant="outlined"
      onChange={onchange}
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      type="text"
      autoComplete="off"
      size="small"
      margin="normal"
      inputProps={{
        pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
      }}
      required
    />
  );
}
