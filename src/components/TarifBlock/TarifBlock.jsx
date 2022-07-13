import Button from 'components/Button/Button';
import Svg from 'components/Svg/Svg';
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

      <Button primary={primary}>Get started</Button>
    </Wrapper>
  );
};
export default TarifBlock;
