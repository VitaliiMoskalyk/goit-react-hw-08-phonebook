import Button from '@mui/material/Button';
import propTypes from 'prop-types';

export default function ContainedButton({ children, onClick }) {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{ mr: 1, ml: 1, mt: 1 }}
      type="submit"
    >
      {children}
    </Button>
    // <IconButton
    //   size="large"
    //   edge="start"
    //   color="inherit"
    //   aria-label="menu"
    //   sx={{ mr: 1, ml: 1 }}
    //   onClick={onClick}
    //   type="submit"
    // >
    //   {children}
    // </IconButton>
  );
}
ContainedButton.propTypes = {
  children: propTypes.node,
  onClick: propTypes.func,
};
