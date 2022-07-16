import ProviderBlock from 'components/ProviderBlock/ProviderBlock';
import { Title2 } from './SubscriptionSection.styled';

const SubscriptionSection = () => {
  return (
    <section>
      <Title2>Choose a subscription</Title2>
      <ul>
        <li>
          <ProviderBlock
            icon="icon-netflix"
            background="#000000"
            title="Netflix subscription rates"
            subscr="The constant contributes to the task of the same and thus the
              intended features and the set relation to the check and set also."
          />
        </li>
        <li>
          <ProviderBlock
            icon="icon-spotify-logo"
            background="#1ED760"
            title="Spotify Premium"
            subscr="The constant contributes to the task of the same and thus the intended features and the set relation to the check and set also."
          />
        </li>
        <li>
          <ProviderBlock
            icon="icon-youtube-logo"
            background="#E1DCEB"
            title="YouTube Premium "
            subscr="The constant contributes to the task of the same and thus the intended features and the set relation to the check and set also."
          />
        </li>
      </ul>
    </section>
  );
};

export default SubscriptionSection;
