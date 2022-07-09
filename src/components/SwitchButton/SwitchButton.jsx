import { Button } from './SwitchButton.styled';

const SwitchButton = ({ children, reverse, disabled }) => {
  return (
    <Button type="button" reverse={reverse} disabled={disabled}>
      {children}
    </Button>
  );
};

export default SwitchButton;
