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
} from './TarifBlock.styled';

const TarifBlock = ({ title, list, price }) => {
  return (
    <Wrapper>
      <BlockTitle>{title}</BlockTitle>
      <Hr />
      <ul>
        {list.map(item => (
          <Items key={item + Date}>
            <Svg icon="icon-Done" width="24" height="24" />

            <ItemWrapper>{item}</ItemWrapper>
          </Items>
        ))}
      </ul>

      <PriceTitle>
        <SignWrapper>$</SignWrapper>
        {price}
      </PriceTitle>

      <Button blue>Get started</Button>
    </Wrapper>
  );
};
export default TarifBlock;
