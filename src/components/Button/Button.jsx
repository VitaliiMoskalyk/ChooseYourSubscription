import { ButtonStl } from './Button.styled';

const Button = ({ children, onClick }) => {
  return (
    <ButtonStl type="button" onClick={onClick}>
      {children}
    </ButtonStl>
  );
};

export default Button;
