import Button from 'components/Button/Button';
import { useWindowWidth } from '@react-hook/window-size';
import {
  Border,
  ContentBox,
  Title3,
  Paragr,
  ImgWrapper,
  ButtonWrapper,
  ButtonTitle,
} from './ProviderBlock.styled';
import Svg from 'components/Svg/Svg';

const ProviderBlock = ({ icon, title, subscr, background, onClick }) => {
  const onlyWidth = useWindowWidth();
  return (
    <Border>
      <ImgWrapper background={background}>
        <Svg icon={icon} width="100%" height="100%" />
      </ImgWrapper>

      <ContentBox>
        <Title3>
          <b>{title}</b>
        </Title3>
        {(onlyWidth < 767 || onlyWidth > 1440) && <Paragr>{subscr}</Paragr>}
        <ButtonWrapper>
          <Button blue onClick={onClick}>
            <ButtonTitle>Learn more</ButtonTitle>
          </Button>
        </ButtonWrapper>
      </ContentBox>
    </Border>
  );
};

export default ProviderBlock;
