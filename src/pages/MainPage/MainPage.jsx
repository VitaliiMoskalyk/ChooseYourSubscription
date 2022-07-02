import {
  HelloSection,
  SubscriptionSection,
  WorksSection,
  AboutSection,
  FAQSection,
  Header,
  Footer,
} from '../../views';
import Wrapper from '../../components/Wrapper/Wrapper';
import { useState } from 'react';
import MobileModal from 'pages/MobileModal/MobileModal';

const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Header opener={handleClick} svgStatus={isOpen} />
      {isOpen && <MobileModal onClose={handleClick} />}
      {!isOpen && (
        <>
          <Wrapper id="MainPage">
            <HelloSection />
            <SubscriptionSection />
            <WorksSection />
            <AboutSection />
            <FAQSection />
          </Wrapper>
          <Footer />
        </>
      )}
    </>
  );
};

export default MainPage;
