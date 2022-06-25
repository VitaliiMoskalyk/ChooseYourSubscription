import { Wrap, Container } from './Wrapper.styled';

const Wrapper = ({ children }) => {
  return (
    <Wrap>
      <Container>{children}</Container>
    </Wrap>
  );
};

export default Wrapper;
