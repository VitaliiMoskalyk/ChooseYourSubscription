import Button from 'components/Button/Button';
import { useWindowWidth } from '@react-hook/window-size';
import {
  Img,
  Border,
  ContentBox,
  Title3,
  Paragr,
  ImgWrapper,
  ButtonWrapper,
  ButtonTitle,
} from './ProviderBlock.styled';

const ProviderBlock = ({ imgSrc, title, subscr }) => {
  const onlyWidth = useWindowWidth();
  return (
    <Border>
      <ImgWrapper>
        <Img src={imgSrc} alt="provider" width="100%" />
      </ImgWrapper>

      <ContentBox>
        <Title3>
          <b>{title}</b>
        </Title3>
        {(onlyWidth < 767 || onlyWidth > 1440) && <Paragr>{subscr}</Paragr>}
        <ButtonWrapper>
          <Button blue>
            <ButtonTitle>Learn more</ButtonTitle>
          </Button>
        </ButtonWrapper>
      </ContentBox>
    </Border>
  );
};

export default ProviderBlock;
