import Button from 'components/Button/Button';
import Svg from 'components/Svg/Svg';

import {
  Title2,
  BorderWrap,
  ReqButtonWrapper,
  Title4,
  WrapBtn,
  BlueBlock,
  Article,
  BtnTxt,
  Section,
  TextWrapper,
} from './FAQ.styled';

const FAQSection = () => {
  return (
    <Section id="FAQ">
      <Title2>FAQ</Title2>
      <li>
        <BorderWrap>
          <Title4>
            The set time has passed, but the invoice has not yet arrived, what
            should I do?
          </Title4>
          <Svg width="40" height="40" icon="icon-Open" />
        </BorderWrap>
      </li>
      <li>
        <BorderWrap>
          <Title4>
            Can I change my Netflix account email and password after purchase?
          </Title4>
          <Svg width="40" height="40" icon="icon-Open" />
        </BorderWrap>
      </li>

      <li>
        <BorderWrap>
          <Title4>Can I add a phone number for password recovery?</Title4>
          <Svg width="40" height="40" icon="icon-Open" />
        </BorderWrap>
      </li>
      <li>
        <BorderWrap>
          <Title4>
            How soon will I receive the account information I ordered?
          </Title4>
          <Svg width="40" height="40" icon="icon-Open" />
        </BorderWrap>
      </li>
      <li>
        <BorderWrap>
          <Title4>How to pay?</Title4>
          <Svg width="40" height="40" icon="icon-Open" />
          {/* <Parag>Payment options we currently have: PayPal, Bitcoin.</Parag> */}
        </BorderWrap>
      </li>
      <WrapBtn>
        <Button black>
          <b>Support</b>
        </Button>
      </WrapBtn>

      <BlueBlock>
        <TextWrapper>
          <Title4>
            Request for an additional subscription that was not found here
          </Title4>
          <Article>
            Disney, Amazon Prime, Microsoft Office, Microsoft Windows
          </Article>
        </TextWrapper>
        <ReqButtonWrapper>
          <Button white>
            <BtnTxt>Request</BtnTxt>
          </Button>
        </ReqButtonWrapper>
      </BlueBlock>
    </Section>
  );
};

export default FAQSection;
