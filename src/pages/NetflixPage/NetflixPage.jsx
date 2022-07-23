import Inviting from 'components/Inviting/Inviting';
import SwitchButton from 'components/SwitchButton/SwitchButton';
import TarifBlock from 'components/TarifBlock/TarifBlock';
import Wrapper from 'components/Wrapper/Wrapper';
// import { useEffect } from 'react';
import { FAQSection } from 'views';
import {
  TarifWrapper,
  MainTitle,
  MainParag,
  SwitchWrapper,
} from '../Pages.styled';

const NetflixPage = () => {
  const netflixItems = [
    'Ad-free music listening',
    'Play anywhere - even offline',
    'On-demand playback',
  ];
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  // useEffect(() => {
  //   console.dir(window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }));
  //   window.scrollTo({ top: '10000px', left: 0, behavior: 'smooth' });
  // });
  return (
    <Wrapper>
      <MainTitle>Choose a Netflix Plan</MainTitle>
      <MainParag>Listen without limits at a bargain price</MainParag>
      <SwitchWrapper>
        <SwitchButton disabled>6 months </SwitchButton>
        <SwitchButton reverse>12 months </SwitchButton>
      </SwitchWrapper>

      <TarifWrapper>
        <TarifBlock title="Basic" list={netflixItems} price="45" primary />
        <TarifBlock title="Standart" list={netflixItems} price="60" />
        <TarifBlock title="Premium" list={netflixItems} price="80" primary />
      </TarifWrapper>

      <Inviting />

      <FAQSection />
    </Wrapper>
  );
};

export default NetflixPage;
