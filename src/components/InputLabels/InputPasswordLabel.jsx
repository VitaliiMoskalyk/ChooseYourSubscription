import Svg from 'components/Svg/Svg';
import { useState } from 'react';
import { Input, InputWrapper, Label, SvgStyled } from './InputLabels.styled';

export const InputPasswordLabel = error => {
  const [isShowPass, setIsShowPass] = useState(false);
  const showPassword = () => {
    setIsShowPass(!isShowPass);
  };

  return (
    <InputWrapper>
      <Label htmlFor="password">Password</Label>
      <SvgStyled onClick={showPassword}>
        {isShowPass ? (
          <Svg icon="icon-openEye" width="22" height="22" />
        ) : (
          <Svg icon="icon-closeEye" width="22" height="22" />
        )}
      </SvgStyled>
      <Input
        error={error}
        id="password"
        name="password"
        type={isShowPass ? 'text' : 'password'}
        placeholder="********"
      />
    </InputWrapper>
  );
};
