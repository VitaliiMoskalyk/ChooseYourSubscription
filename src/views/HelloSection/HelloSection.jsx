import HelloPic from '../../images/MainPic.jpg';
import Button from 'components/Button/Button';
import ImageBlock from 'components/ImageBlock/ImageBlock';
import { BlueBlock, ImgWrapper, Title2, Paragr2 } from './HelloSection.styled';

const HelloSection = () => {
  return (
    <section>
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
        <Button onClick={() => console.log('click')} white>
          <b>Start using</b>
        </Button>
      </BlueBlock>
    </section>
  );
};

export default HelloSection;
