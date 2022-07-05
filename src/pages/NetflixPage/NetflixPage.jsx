import Inviting from 'components/Inviting/Inviting';
import TarifBlock from 'components/TarifBlock/TarifBlock';
import Wrapper from 'components/Wrapper/Wrapper';
import { FAQSection } from 'views';

const NetflixPage = () => {
  const netflixItems = [
    'Ad-free music listening',
    'Play anywhere - even offline',
    'On-demand playback',
  ];
  return (
    <Wrapper>
      <TarifBlock title="Basic" list={netflixItems} price="45" />
      <TarifBlock title="Standart" list={netflixItems} price="60" />
      <TarifBlock title="Premium" list={netflixItems} price="80" />
      <Inviting />
      <FAQSection />
    </Wrapper>
  );
};

export default NetflixPage;
