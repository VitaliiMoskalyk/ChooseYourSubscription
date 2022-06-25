import Button from 'components/Button/Button';
import NetflixPic from '../../images/Netflix.jpg';
import SpotifyPic from '../../images/Spotify.jpg';
import YouTubePic from '../../images/YouTube.jpg';
import ProviderBlock from 'components/ProviderBlock/ProviderBlock';
const SubscriptionSection = () => {
  return (
    <>
      <h2>Choose a subscription</h2>
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
    </>
  );
};

export default SubscriptionSection;
