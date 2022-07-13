import Svg from 'components/Svg/Svg';
import {
  ClickWrap,
  CopyButton,
  InviteBlock,
  InviteBlockWrapper,
  Parag,
  Title,
  Link,
  B,
} from './Inviting.styled';
import copy from 'copy-to-clipboard';

const Inviting = () => {
  return (
    <InviteBlock>
      <InviteBlockWrapper>
        <Title>Invite friends</Title>
        <Parag>
          Starting today up to 50% for NETFLIX, YOUTUBE, SPOTIFY subscriptions
          with a secure payment from PAYPAL
        </Parag>
      </InviteBlockWrapper>

      <ClickWrap>
        Click on the link
        <CopyButton
          type="button"
          onClick={() =>
            copy('Discounts On Services', {
              debug: true,
            })
          }
        >
          <Link>
            <B>Discounts On Services</B>
            <Svg width="18.42" height="18.42" icon="icon-Copy" />
          </Link>
        </CopyButton>
      </ClickWrap>
    </InviteBlock>
  );
};

export default Inviting;
