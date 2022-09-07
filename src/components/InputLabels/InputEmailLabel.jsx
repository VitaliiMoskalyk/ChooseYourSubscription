import Svg from 'components/Svg/Svg';
import { Input, InputWrapper, Label, SvgStyled } from './InputLabels.styled';

export const InputEmailLabel = error => {
  return (
    <InputWrapper>
      <Label htmlFor="email">Email Address</Label>
      <SvgStyled>
        {error.error ? (
          <Svg icon="icon-invalid" width="22" height="22" />
        ) : (
          <Svg icon="icon-Valid" width="22" height="22" />
        )}
      </SvgStyled>
      <Input
        error={error}
        id="email"
        name="email"
        type="email"
        placeholder="name@gmail.com"
      />
    </InputWrapper>
  );
};
