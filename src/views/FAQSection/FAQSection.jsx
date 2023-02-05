import Button from 'components/Button/Button';
import Dropdown from 'components/Dropdown/Dropdown';

import { Title2, WrapBtn, Section } from './FAQ.styled';

const FAQSection = () => {
  return (
    <Section id="FAQ">
      <Title2>FAQ</Title2>
      <li>
        <Dropdown
          answer="If the accounts have not been filed but the accountant is working on them – let them know of the new-found invoice and they'll tell you how to deal with it."
          question="The set time has passed, but the invoice has not yet arrived, what
              should I do?"
        />
      </li>
      <li>
        <Dropdown
          answer="Learn how to update the email address, phone number, password, shipping address, or method of payment for your Netflix account."
          question="Can I change my Netflix account email and password after purchase?"
        />
      </li>

      <li>
        <Dropdown
          answer="Set up a recovery phone number or email address. To make sure you can get back into your Google Account if you ever can't sign in, add recovery information."
          question="Can I add a phone number for password recovery?"
        />
      </li>
      <li>
        <Dropdown
          answer="Direct to Bank deposit typically takes between 2 to 5 business days, but could vary, depending on country. Bill Payment may vary depending on the selected speed ..."
          question="How soon will I receive the account information I ordered?"
        />
      </li>
      <li>
        <Dropdown
          answer="Payment options we currently have: PayPal, Bitcoin."
          question="How to pay?"
        />
      </li>
      <WrapBtn>
        <Button primary>Support</Button>
      </WrapBtn>
    </Section>
  );
};

export default FAQSection;
