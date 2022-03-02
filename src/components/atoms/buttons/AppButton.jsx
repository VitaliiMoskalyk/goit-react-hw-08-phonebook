import IconButton from '@mui/material/IconButton';

export default function AppButton({ children, onClick }) {
  return (
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 1, ml: 1 }}
      onClick={onClick}
      type="submit"
    >
      {children}
    </IconButton>
  );
}
