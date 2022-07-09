import Button from 'components/Button/Button';
import {
  Article,
  BlueBlock,
  BtnTxt,
  ReqButtonWrapper,
  TextWrapper,
  Title,
} from './Request.styled';

const Request = () => {
  return (
    <BlueBlock>
      <TextWrapper>
        <Title>
          Request for an additional subscription that was not found here
        </Title>
        <Article>
          Disney, Amazon Prime, Microsoft Office, Microsoft Windows
        </Article>
      </TextWrapper>
      <ReqButtonWrapper>
        <Button invert>
          <BtnTxt>Request</BtnTxt>
        </Button>
      </ReqButtonWrapper>
    </BlueBlock>
  );
};

export default Request;
