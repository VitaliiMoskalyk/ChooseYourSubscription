import Button from 'components/Button/Button';
const ProviderBlock = ({ imgSrc, title, subscr }) => {
  return (
    <>
      <img src={imgSrc} alt="provider" width="327" />
      <h3>{title}</h3>
      <p>{subscr}</p>
      <Button>Learn more</Button>
    </>
  );
};

export default ProviderBlock;
