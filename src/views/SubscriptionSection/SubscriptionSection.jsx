import NetflixPic from '../../images/Netflix.jpg';
import SpotifyPic from '../../images/Spotify.jpg';
import YouTubePic from '../../images/YouTube.jpg';
import ProviderBlock from 'components/ProviderBlock/ProviderBlock';
import { Title2 } from './SubscriptionSection.styled';

const SubscriptionSection = () => {
  return (
    <section>
      <Title2>Choose a subscription</Title2>
      <ul>
        <li>
          <ProviderBlock
            imgSrc={NetflixPic}
            title="Netflix subscription rates"
            subscr="The constant contributes to the task of the same and thus the
              intended features and the set relation to the check and set also."
          />
        </li>
        <li>
          <ProviderBlock
            imgSrc={SpotifyPic}
            title="Spotify Premium"
            subscr="The constant contributes to the task of the same and thus the intended features and the set relation to the check and set also."
          />
        </li>
        <li>
          <ProviderBlock
            imgSrc={YouTubePic}
            title="Spotify Premium"
            subscr="The constant contributes to the task of the same and thus the intended features and the set relation to the check and set also."
          />
        </li>
      </ul>
    </section>
  );
};

export default SubscriptionSection;
