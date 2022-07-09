import Button from 'components/Button/Button';
import Svg from 'components/Svg/Svg';

import { Title2, BorderWrap, Title4, WrapBtn, Section } from './FAQ.styled';

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
        <Button primary>Support</Button>
      </WrapBtn>
    </Section>
  );
};

export default FAQSection;
