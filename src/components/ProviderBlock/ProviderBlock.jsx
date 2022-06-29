import Button from 'components/Button/Button';
import {
  Img,
  Border,
  ContentBox,
  Title3,
  Paragr,
} from './ProviderBlock.styled';

const ProviderBlock = ({ imgSrc, title, subscr }) => {
  return (
    <Border>
      <Img src={imgSrc} alt="provider" width="327" />
      <ContentBox>
        <Title3>
          <b>{title}</b>
        </Title3>
        <Paragr>{subscr}</Paragr>
        <Button blue>
          <b>Learn more</b>
        </Button>
      </ContentBox>
    </Border>
  );
};

export default ProviderBlock;
