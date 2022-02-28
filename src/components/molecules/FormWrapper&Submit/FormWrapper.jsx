import { Wrapper } from './FormWrapper.styled';
import IconButton from '@mui/material/IconButton';

export function FormWrapper({ children, onSubmit, submitButton }) {
  return (
    <Wrapper onSubmit={onSubmit} style={{ marginTop: '120px' }}>
      {children}
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        // aria-label="menu"
        // sx={{ mr: 2 }}
        type="submit"
      >
        {submitButton}
      </IconButton>
    </Wrapper>
  );
}
