import {
  Title2,
  Wrap,
  Title3,
  Paragr,
  BlueBlock,
  Title3blue,
  ParagrBlue,
  ClickWrap,
  Link,
  CopyButton,
  HowWrapper,
  BlueBlockWrapper,
} from './WorksSection.styled';
import copy from 'copy-to-clipboard';
import Svg from 'components/Svg/Svg';

const WorksSection = () => {
  return (
    <>
      <Title2>How it works?</Title2>
      <HowWrapper>
        <Wrap>
          <Title3>Step 1</Title3>
          <Svg width="93" height="93" icon="icon-Bell" />

          <Paragr>Enter your account information</Paragr>
        </Wrap>
        <Wrap>
          <Title3>Step 2</Title3>
          <Svg width="93" height="93" icon="icon-Chats" />

          <Paragr>Select the desired subscription and plan</Paragr>
        </Wrap>
        <Wrap>
          <Title3>Step 3</Title3>
          <Svg width="93" height="93" icon="icon-Successful" />

          <Paragr>Pay your bill with PayPal</Paragr>
        </Wrap>
      </HowWrapper>
      <BlueBlock>
        <BlueBlockWrapper>
          <Title3blue>Invite friends</Title3blue>
          <ParagrBlue>
            Starting today up to 50% for NETFLIX, YOUTUBE, SPOTIFY subscriptions
            with a secure payment from PAYPAL
          </ParagrBlue>
        </BlueBlockWrapper>

        <ClickWrap>
          Click on the link
          <CopyButton
            type="button"
            onClick={() =>
              copy('Discounts On Services', {
                debug: true,
                message: 'Press #{key} to copy',
              })
            }
          >
            <Link>
              <b>Discounts On Services</b>
            </Link>
            <Svg width="18.42" height="18.42" icon="icon-Copy" />
          </CopyButton>
        </ClickWrap>
      </BlueBlock>
    </>
  );
};

export default WorksSection;
