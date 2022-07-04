import {
  HelloSection,
  SubscriptionSection,
  WorksSection,
  AboutSection,
  FAQSection,
} from '../../views';
import Wrapper from '../../components/Wrapper/Wrapper';

const MainPage = () => {
  return (
    <Wrapper id="MainPage">
      <HelloSection />
      <SubscriptionSection />
      <WorksSection />
      <AboutSection />
      <FAQSection />
    </Wrapper>
  );
};

export default MainPage;
