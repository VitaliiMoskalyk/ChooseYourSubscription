import Button from 'components/Button/Button';
import sprite from '../../images/sprite.svg';
const WorksSection = () => {
  return (
    <>
      <h2>How it works?</h2>
      <ul>
        <li>
          <h3>Step 1</h3>
          <svg width="93" height="93">
            <use href={`${sprite}#icon-Bell`}></use>
          </svg>
          <p>Enter your account information</p>
        </li>
        <li>
          <h3>Step 2</h3>
          <svg width="93" height="93">
            <use href={`${sprite}#icon-Chats`}></use>
          </svg>
          <p>Select the desired subscription and plan</p>
        </li>
        <li>
          <h3>Step 3</h3>
          <svg width="93" height="93">
            <use href={`${sprite}#icon-Successful`}></use>
          </svg>
          <p>Pay your bill with PayPal</p>
        </li>
      </ul>
      <div>
        <h3>Invite friends</h3>
        <p>
          Starting today up to 50% for NETFLIX, YOUTUBE, SPOTIFY subscriptions
          with a secure payment from PAYPAL
        </p>
        <Button>
          Click on the link <a href="#">Discounts On Services</a>
          <svg width="18.42" height="18.42">
            <use href={`${sprite}#icon-Copy`}></use>
          </svg>
        </Button>
      </div>
    </>
  );
};

export default WorksSection;
