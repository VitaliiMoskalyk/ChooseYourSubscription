import Svg from 'components/Svg/Svg';
import { SocialLinks, Link } from './SocialMedia.styled';

const SocialMedia = ({ fill, width }) => {
  return (
    <SocialLinks>
      <li>
        <Link
          href="https://api.whatsapp.com/send? phone=380502090950"
          target="blank"
        >
          <Svg width={width} height={width} icon="icon-whatsapp" fill={fill} />
        </Link>
      </li>
      <li>
        <Link href="tg://resolve?domain=MVitalikM" target="blank">
          <Svg width={width} height={width} icon="icon-telegram" fill={fill} />
        </Link>
      </li>
    </SocialLinks>
  );
};

export default SocialMedia;
