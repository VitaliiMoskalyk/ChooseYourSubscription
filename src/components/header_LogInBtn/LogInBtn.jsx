import { LogInButton } from './LogInBtn.styled';

const LogInBtn = ({ children, onClick }) => {
  return <LogInButton onClick={onClick}>{children}</LogInButton>;
};

export default LogInBtn;
