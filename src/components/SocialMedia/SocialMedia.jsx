import Svg from 'components/Svg/Svg';
import { SocialLinks, Link } from './SocialMedia.styled';

const SocialMedia = ({ fill, width, inverse }) => {
  return (
    <SocialLinks>
      <li>
        <Link
          href="https://api.whatsapp.com/send? phone=380502090950"
          target="blank"
          fill={fill}
          inverse={inverse}
        >
          <Svg width={width} height={width} icon="icon-whatsapp" />
        </Link>
      </li>
      <li>
        <Link
          href="tg://resolve?domain=MVitalikM"
          target="blank"
          fill={fill}
          inverse={inverse}
        >
          <Svg width={width} height={width} icon="icon-telegram" />
        </Link>
      </li>
    </SocialLinks>
  );
};

export default SocialMedia;
