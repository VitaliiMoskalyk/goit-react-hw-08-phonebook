import { Wrapper } from './FormWrapper.styled';
import propTypes from 'prop-types';
import ContainedButton from 'components/buttons/ContainedButton';

export function FormWrapper({ children, onSubmit, submitButton }) {
  return (
    <Wrapper onSubmit={onSubmit} style={{ marginTop: '120px' }}>
      {children}
      <ContainedButton>{submitButton}</ContainedButton>
    </Wrapper>
  );
}
FormWrapper.propTypes = {
  children: propTypes.any,
  onSubmit: propTypes.func,
  submitButton: propTypes.node,
};
