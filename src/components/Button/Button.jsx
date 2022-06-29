import { ButtonWhite, ButtonBlue, ButtonBlack } from './Button.styled';

const Button = ({ children, onClick, white, blue, black }) => {
  return (
    <>
      {white && (
        <ButtonWhite type="button" onClick={onClick}>
          {children}
        </ButtonWhite>
      )}
      {blue && (
        <ButtonBlue type="button" onClick={onClick}>
          {children}
        </ButtonBlue>
      )}
      {black && (
        <ButtonBlack type="button" onClick={onClick}>
          {children}
        </ButtonBlack>
      )}
    </>
  );
};

export default Button;
