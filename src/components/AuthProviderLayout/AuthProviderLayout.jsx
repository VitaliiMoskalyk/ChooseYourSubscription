import Svg from 'components/Svg/Svg';

const { Block } = require('./AuthProviderLayout.styled');

const AuthProviderLayout = ({ icon, handleClick }) => {
  return (
    <Block onClick={() => console.log(handleClick)}>
      <Svg icon={icon} width="100%" height="35" />
    </Block>
  );
};

export default AuthProviderLayout;
