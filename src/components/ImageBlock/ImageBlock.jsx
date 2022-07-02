import { Img, ImgWrapper } from './ImageBlock.styled';

const ImageBlock = ({ src, alt }) => {
  return (
    <ImgWrapper>
      <Img src={src} alt={alt} width="100%" />
    </ImgWrapper>
  );
};

export default ImageBlock;
