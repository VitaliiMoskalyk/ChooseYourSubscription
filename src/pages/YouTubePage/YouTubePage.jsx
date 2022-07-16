import Inviting from 'components/Inviting/Inviting';
import TarifBlock from 'components/TarifBlock/TarifBlock';
import Wrapper from 'components/Wrapper/Wrapper';
import { MainParag, MainTitle, TarifWrapper } from 'pages/Pages.styled';
import { FAQSection } from 'views';

const YouTubePage = () => {
  return (
    <Wrapper>
      <MainTitle>YouTube Premium</MainTitle>
      <MainParag>
        Select the subscription type for a period of 12 months:
      </MainParag>

      <TarifWrapper>
        <TarifBlock
          title="Music"
          list={['Listen to music without ads, in the background and offline']}
          price="60"
        />
        <TarifBlock
          title="Premium"
          list={[
            'YouTube and YouTube Music without ads, in the background and offline',
          ]}
          price="80"
          primary
        />
      </TarifWrapper>

      <Inviting />

      <FAQSection />
    </Wrapper>
  );
};
export default YouTubePage;
