import {
  Title2,
  Wrap,
  Title3,
  Paragr,
  HowWrapper,
} from './WorksSection.styled';

import Svg from 'components/Svg/Svg';

import Inviting from 'components/Inviting/Inviting';

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
      <Inviting />
    </>
  );
};

export default WorksSection;
