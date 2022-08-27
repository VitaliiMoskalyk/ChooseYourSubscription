import { Input, InputWrapper, Label } from './InputLabels.styled';

export const InputVerifyLabel = error => {
  return (
    <InputWrapper>
      <Label htmlFor="code">Email verification code</Label>

      <Input
        error={error}
        id="code"
        name="code"
        type="text"
        placeholder="XXXXXX"
      />
    </InputWrapper>
  );
};
