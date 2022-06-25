import Header from '../views/Header/Header';
import HelloSection from '../views/HelloSection/HelloSection';
import SubscriptionSection from '../views/SubscriptionSection/SubscriptionSection';
import WorksSection from '../views/WorksSection/WorksSection';
import AboutSection from '../views/AboutSection/AboutSection';
import FAQSection from '../views/FAQSection/FAQSection';
import Footer from '../views/Footer/Footer';
import Wrapper from './Wrapper/Wrapper';

export const App = () => {
  return (
    <Wrapper>
      <Header />
      <HelloSection />
      <SubscriptionSection />
      <WorksSection />
      <AboutSection />
      <FAQSection />
      <Footer />
    </Wrapper>
  );
};
