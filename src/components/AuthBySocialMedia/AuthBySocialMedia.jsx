import AuthProviderLayout from 'components/AuthProviderLayout/AuthProviderLayout';
import { AuthWrapper, Border, Text } from './AuthBySocialMedia.styled';

const AuthBySocialMedia = () => {
  return (
    <>
      <Border>
        <Text>Or sign in with</Text>
      </Border>
      <AuthWrapper>
        <AuthProviderLayout icon="icon-GoodleAuth" handleClick="Ooops" />
        <AuthProviderLayout icon="icon-FacebookAuth" />
        <AuthProviderLayout icon="icon-AppleAuth" />
      </AuthWrapper>
    </>
  );
};

export default AuthBySocialMedia;
