import { Button1, Button2 } from './Button.styled';

const Button = ({
  children,
  onClick,
  primary = false,
  invert,
  type = 'button',
}) => {
  return invert ? (
    <Button2 type={type} onClick={onClick}>
      <b>{children}</b>
    </Button2>
  ) : (
    <Button1 type={type} onClick={onClick} primary={primary}>
      <b>{children}</b>
    </Button1>
  );
};

export default Button;
