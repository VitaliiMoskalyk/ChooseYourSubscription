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
    <Wrapper>
      <HelloSection />
      <SubscriptionSection />
      <WorksSection />
      <AboutSection />
      <FAQSection />
    </Wrapper>
  );
};

export default MainPage;
