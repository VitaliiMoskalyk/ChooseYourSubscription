import SubMenu from 'components/SubMenu/SubMenu';
import { useState } from 'react';
import { LanguageBlock, LanguageTitle, Wrap } from './LanguageSwitcher.styled';

const { default: Svg } = require('components/Svg/Svg');

const LanguageSwitcher = ({ fill }) => {
  const [lang, setLang] = useState('EN');
  return (
    <Wrap>
      <LanguageTitle>{lang}</LanguageTitle>
      <Svg icon="icon-Lang" width="12" fill={fill} height="12" />
      <SubMenu>
        <LanguageBlock>
          <li onClick={() => setLang('EN')}>English</li>
          <li onClick={() => setLang('RU')}>Russian</li>
          <li onClick={() => setLang('UA')}>Ukrainian</li>
        </LanguageBlock>
      </SubMenu>
    </Wrap>
  );
};

export default LanguageSwitcher;
