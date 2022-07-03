import Wrapper from 'components/Wrapper/Wrapper';
import { FAQSection, Footer, Header } from 'views';
import { useState } from 'react';
import MobileModal from 'pages/MobileModal/MobileModal';

const NetflixPage = () => {
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
          <Wrapper>
            <FAQSection />
          </Wrapper>
          <Footer />
        </>
      )}
    </>
  );
};

export default NetflixPage;
