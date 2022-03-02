import { Wrapper } from './FormWrapper.styled';
import AppButton from 'components/atoms/buttons/AppButton';

export function FormWrapper({ children, onSubmit, submitButton }) {
  return (
    <Wrapper onSubmit={onSubmit} style={{ marginTop: '120px' }}>
      {children}
      <AppButton>{submitButton}</AppButton>
    </Wrapper>
  );
}
