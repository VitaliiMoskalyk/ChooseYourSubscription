import {
  HelloSection,
  SubscriptionSection,
  WorksSection,
  AboutSection,
  FAQSection,
} from '../../views';
import Wrapper from '../../components/Wrapper/Wrapper';
import Request from 'components/Request/Request';

const MainPage = () => {
  return (
    <Wrapper id="MainPage">
      <HelloSection />
      <SubscriptionSection />
      <WorksSection />
      <AboutSection />
      <Request />
      <FAQSection />
    </Wrapper>
  );
};

export default MainPage;
