import { LogInButton } from './LogInBtn.styled';
import { useDispatch } from 'react-redux';
import { toggleAuthModal } from 'redux/slices/modalSlace';

const LogInBtn = ({ children, onClick }) => {
  const dispatch = useDispatch();
  return (
    <LogInButton onClick={() => dispatch(toggleAuthModal())}>
      {children}
    </LogInButton>
  );
};

export default LogInBtn;
