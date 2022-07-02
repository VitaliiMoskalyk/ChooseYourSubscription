import Svg from 'components/Svg/Svg';
import { SocialLinks } from './SocialMedia.styled';

const SocialMedia = ({ fill, width }) => {
  return (
    <SocialLinks>
      <li>
        <a
          href="https://api.whatsapp.com/send? phone=380502090950"
          target="blank"
        >
          <Svg width={width} height={width} icon="icon-whatsapp" fill={fill} />
        </a>
      </li>
      <li>
        <a href="tg://resolve?domain=MVitalikM" target="blank">
          <Svg width={width} height={width} icon="icon-telegram" fill={fill} />
        </a>
      </li>
    </SocialLinks>
  );
};

export default SocialMedia;
