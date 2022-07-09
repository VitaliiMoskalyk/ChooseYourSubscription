import { Button1, Button2 } from './Button.styled';

const Button = ({ children, onClick, primary = false, invert }) => {
  return invert ? (
    <Button2 type="button" onClick={onClick}>
      <b>{children}</b>
    </Button2>
  ) : (
    <Button1 type="button" onClick={onClick} primary={primary}>
      <b>{children}</b>
    </Button1>
  );
};

export default Button;
