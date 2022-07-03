import { LanguageTitle } from './LanguageSwitcher.styled';

const { default: Svg } = require('components/Svg/Svg');

const LanguageSwitcher = ({ fill }) => {
  return (
    <>
      <LanguageTitle>EN</LanguageTitle>
      <Svg icon="icon-Lang" width="12" fill={fill} height="12" />
    </>
  );
};

export default LanguageSwitcher;
