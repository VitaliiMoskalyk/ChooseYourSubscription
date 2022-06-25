import Button from 'components/Button/Button';

const FAQSection = () => {
  return (
    <>
      <h2>FAQ</h2>
      <li>
        <h4>
          The set time has passed, but the invoice has not yet arrived, what
          should I do?
        </h4>
      </li>
      <li>
        <h4>
          Can I change my Netflix account email and password after purchase?
        </h4>
      </li>
      <li>
        <h4>Can I add a phone number for password recovery?</h4>
      </li>
      <li>
        <h4>How soon will I receive the account information I ordered?</h4>
      </li>
      <li>
        <h4>How to pay?</h4>
        <p>Payment options we currently have: PayPal, Bitcoin.</p>
      </li>
      <Button>Support</Button>

      <div>
        <h4>Request for an additional subscription that was not found here</h4>
        <p>Disney, Amazon Prime, Microsoft Office, Microsoft Windows</p>
        <Button>Request</Button>
      </div>
    </>
  );
};

export default FAQSection;
