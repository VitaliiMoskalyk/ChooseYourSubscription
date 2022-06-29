import { Img } from './ImageBlock.styled';

const ImageBlock = ({ src, alt }) => {
  return <Img src={src} alt={alt} width="100%" />;
};

export default ImageBlock;
