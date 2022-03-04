import { Wrapper } from './FormWrapper.styled';
import AppButton from 'components/atoms/buttons/AppButton';
import propTypes from 'prop-types';

export function FormWrapper({ children, onSubmit, submitButton }) {
  return (
    <Wrapper onSubmit={onSubmit} style={{ marginTop: '120px' }}>
      {children}
      <AppButton>{submitButton}</AppButton>
    </Wrapper>
  );
}
FormWrapper.propTypes = {
  children: propTypes.any,
  onSubmit: propTypes.func,
  submitButton: propTypes.element,
};
