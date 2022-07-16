import Inviting from 'components/Inviting/Inviting';
import TarifBlock from 'components/TarifBlock/TarifBlock';
import Wrapper from 'components/Wrapper/Wrapper';
import { MainParag, MainTitle, TarifWrapper } from 'pages/Pages.styled';
import { FAQSection } from 'views';

const SpotifyPage = () => {
  return (
    <Wrapper>
      <MainTitle>Choose a Spotify Plan</MainTitle>
      <MainParag>
        Select the subscription type for a period of 12 months:
      </MainParag>

      <TarifWrapper>
        <TarifBlock
          title="Individual"
          list={[
            'Ad-free music listening',
            'Play anywhere - even offline',
            'On-demand playback',
          ]}
          price="47"
        />
        <TarifBlock
          title="Duo"
          list={[
            '2 Premium accounts for a couple under one roof',
            'Ad-free music listening, play offline, on-demand playback',
          ]}
          price="57"
          primary
        />
        <TarifBlock
          title="Family"
          list={[
            '6 Premium accounts for family members living under one roof',
            'Block explicit music',
            'Ad-free music listening, play offline, on-demand playback',
          ]}
          price="77"
        />
      </TarifWrapper>

      <Inviting />

      <FAQSection />
    </Wrapper>
  );
};
export default SpotifyPage;
