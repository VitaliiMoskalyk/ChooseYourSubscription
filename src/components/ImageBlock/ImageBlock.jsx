import { Img, ImgWrapper } from './ImageBlock.styled';

const ImageBlock = ({ src, alt }) => {
  return (
    <ImgWrapper>
      <Img src={src} alt={alt} loading="lazy" />
    </ImgWrapper>
  );
};

export default ImageBlock;
