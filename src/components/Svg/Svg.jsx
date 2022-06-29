import sprite from '../../images/sprite.svg';

const Svg = ({ width, height, icon, fill }) => {
  return (
    <svg width={width} height={height} fill={fill}>
      <use href={`${sprite}#${icon}`}></use>
    </svg>
  );
};

export default Svg;
