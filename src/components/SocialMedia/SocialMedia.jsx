import Svg from 'components/Svg/Svg';
import { SocialLinks, SocialMed } from './SocialMedia.styled';

const SocialMedia = ({ fill }) => {
  return (
    <SocialLinks>
      <SocialMed>
        <a
          href="https://api.whatsapp.com/send? phone=380502090950"
          target="blank"
        >
          <Svg width="32" height="32" icon="icon-whatsapp" fill={fill} />
        </a>
      </SocialMed>
      <SocialMed>
        <a href="tg://resolve?domain=MVitalikM" target="blank">
          <Svg width="32" height="32" icon="icon-telegram" fill={fill} />
        </a>
      </SocialMed>
    </SocialLinks>
  );
};

export default SocialMedia;
