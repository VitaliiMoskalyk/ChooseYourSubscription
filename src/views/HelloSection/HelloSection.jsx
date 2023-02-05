import HelloPic from '../../images/MainPic.svg';
import Button from 'components/Button/Button';
import ImageBlock from 'components/ImageBlock/ImageBlock';

import {
  BlueBlock,
  ImgWrapper,
  Title2,
  Paragr2,
  Section,
  ButtonWrapper,
} from './HelloSection.styled';

const HelloSection = () => {
  return (
    <Section id="Home">
      <ImgWrapper>
        <ImageBlock src={HelloPic} alt="Hello picture" id="HelloSection" />
      </ImgWrapper>

      <BlueBlock>
        <Title2>
          <b>Start enjoying a benefit of up to 50%</b>
        </Title2>
        <Paragr2>
          You have always wanted to get the same product at a special price for
          you, without haggling - and it is yours.
        </Paragr2>
        <ButtonWrapper>
          <Button invert>
            <b>Start using</b>
          </Button>
        </ButtonWrapper>
      </BlueBlock>
    </Section>
  );
};

export default HelloSection;
