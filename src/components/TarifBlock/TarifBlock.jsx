import Button from 'components/Button/Button';
import Svg from 'components/Svg/Svg';
import { useDispatch } from 'react-redux';
import { toggleSubscriptionModal } from 'redux/slices/modalSlace';
import {
  Wrapper,
  Hr,
  BlockTitle,
  ItemWrapper,
  Items,
  PriceTitle,
  SignWrapper,
  List,
} from './TarifBlock.styled';

const TarifBlock = ({ title, list, price, primary }) => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <BlockTitle>{title}</BlockTitle>
      <Hr />
      <List>
        {list.map(item => (
          <Items key={item + Date}>
            <Svg icon="icon-Done" width="24" height="24" />

            <ItemWrapper>{item}</ItemWrapper>
          </Items>
        ))}
      </List>

      <PriceTitle>
        <SignWrapper>$</SignWrapper>
        {price}
      </PriceTitle>

      <Button
        primary={primary}
        onClick={() => dispatch(toggleSubscriptionModal())}
      >
        Get started
      </Button>
    </Wrapper>
  );
};
export default TarifBlock;
